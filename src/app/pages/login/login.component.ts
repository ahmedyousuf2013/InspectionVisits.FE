import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { loginModel } from 'app/models/login-model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    error = '';

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void { }

    get f() { return this.loginForm.controls; }

    onSubmit(): void {
        this.submitted = true;
        this.error = '';
        if (this.loginForm.invalid) {
            this.toastr.error('Please fill in all required fields', 'Validation Error');
            return;
        }
        let model = this.loginForm.value as loginModel;
        this.auth.Login(model).subscribe(respose => {
            if (respose.isSuccess) {
                localStorage.setItem(this.auth.tokenKey, respose.result.token);
                this.toastr.success('Login successful', 'Welcome');
                this.router.navigate(['/dashboard']);
            } else {
                this.error = 'Invalid credentials';
                this.toastr.error('Invalid credentials', 'Login Failed');
            }
        }, error => {
            this.toastr.error('An error occurred while logging in', 'Error');
            console.error('Login error:', error);
        })

    }
}
