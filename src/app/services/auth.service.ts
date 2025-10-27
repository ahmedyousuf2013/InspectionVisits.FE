import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from 'app/models/login-model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse, TokenResult } from 'app/models/api-response.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public tokenKey = 'token';
    private apiUrl = environment.ApiUrl;

    constructor(private http: HttpClient) { }

    Login(body: loginModel): Observable<ApiResponse<TokenResult>> {
        const url = `${this.apiUrl}Account/login`;
        return this.http.post<ApiResponse<TokenResult>>(url, body);
    }
    // login(username: string, password: string):Observable<ApiResponse<TokenResult>> {
    //     // Very small demo auth: accept any non-empty credentials.
    //     if (username && password) {

    //         this.http.post(`${this.apiUrl}Account/login`, { username, password }).
    //             subscribe(response => {

    //                 if (response.) {



    //                 }


    //             });
    //         // In real app, call backend and store real token
    //         const fakeToken = btoa(username + ':' + new Date().getTime());
    //         localStorage.setItem(this.tokenKey, fakeToken);
    //         return true;
    //     }
    //     return false;
    // }

    logout(): void {
        // Remove auth token
        localStorage.removeItem(this.tokenKey);
        // Clear any other auth-related data from localStorage if any
        localStorage.removeItem('user');
        localStorage.removeItem('permissions');
        // You could also clear the entire localStorage if needed
        // localStorage.clear();
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }
}
