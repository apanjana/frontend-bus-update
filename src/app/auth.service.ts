import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/users'; // URL of your backend auth endpoint
  private tokenKey = 'authToken'; // Key for storing JWT in local storage

  // constructor(private http: HttpClient) {}

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post('/login', credentials); // Call to backend API
  }


  // Method to login user and store JWT token
  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = { username, password };
    
  //   return this.http.post<any>(`${this.authUrl}/login`, body, { headers }).pipe(
  //     tap(response => {
  //       if (response && response.token) {
  //         this.storeToken(response.token);  // Store the JWT token
  //       }
  //     })
  //   );
  // }

  // // Register user (optional)
  // register(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = { username, password };
    
  //   return this.http.post<any>(`${this.authUrl}/register`, body, { headers });
  // }

  // // Store token in localStorage or sessionStorage
  // private storeToken(token: string): void {
  //   localStorage.setItem(this.tokenKey, token);
  // }

  // // Get the stored token
  // getToken(): string | null {
  //   return localStorage.getItem(this.tokenKey);
  // }

  // // Check if the user is authenticated (token exists)
  // isAuthenticated(): boolean {
  //   return !!this.getToken();
  // }

  // // Logout the user and clear the token
  // logout(): void {
  //   localStorage.removeItem(this.tokenKey);
  // }
}
