import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/user/register`, {
      username: username,
      password: password,
    });
  }

  loginUser(username: string, password: string) {
    return this.http.post(`${environment.apiUrl}/user/login`, {
      username: username,
      password: password,
    });
  }

  getUser(userID: string) {
    return this.http.get(`${environment.apiUrl}/user/${userID}/get`);
  }

  deleteUser(userID: string) {
    return this.http.delete(`${environment.apiUrl}/user/${userID}/delete`);
  }

  searchUserArticles(userID: string, limit: number = 10, skip: number = 0) {
    return this.http.get(
      `${environment.apiUrl}/user/${userID}/articles/search?limit=${limit}&skip=${skip}`
    );
  }

  searchUserComments(userID: string, limit: number = 10, skip: number = 0) {
    return this.http.get(
      `${environment.apiUrl}/user/${userID}/comments/search?limit=${limit}&skip=${skip}`
    );
  }
}
