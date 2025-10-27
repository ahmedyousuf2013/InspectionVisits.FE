import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { loginModel } from 'app/models/login-model';


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
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router,
     
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
            return;
        }
        let model = this.loginForm.value as loginModel;
         this.auth.Login(model).subscribe(respose => {

            if (respose.isSuccess) {
                localStorage.setItem(this.auth.tokenKey, respose.result.token);
                this.router.navigate(['/dashboard']);

            } else {

                this.error = 'Invalid credentials';
            }
        })

    }
}
