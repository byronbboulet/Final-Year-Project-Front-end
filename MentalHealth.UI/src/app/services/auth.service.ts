import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://localhost:7036/api/Users/login'; // Adjust with actual API endpoint
  private signupUrl = 'https://localhost:7036/api/Users/signup'; // Adjust with actual API endpoint
  constructor(private http: HttpClient) { }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 101);
  }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { email, password });
  }

  signup(username: string, email: string, profileImage: string, password: string): Observable<any> {
    const id = this.generateRandomNumber()
    const user = new User(id, username, email, password, profileImage );
    console.log('signup', user);

    return this.http.post(this.signupUrl, user);
  }
}
