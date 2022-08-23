import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getComment(commentID: string) {
    return this.http.get(`${environment.apiUrl}/comment/${commentID}/get`);
  }

  updateComment(commentID: string, body: string) {
    return this.http.put(`${environment.apiUrl}/comment/${commentID}/update`, {
      body: body,
    });
  }

  deleteComment(commentID: string) {
    return this.http.delete(
      `${environment.apiUrl}/comment/${commentID}/delete`
    );
  }
}
