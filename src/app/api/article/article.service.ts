import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  postArticle(author: string, title: string, body: string, tags: string[]) {
    return this.http.post(`${environment.apiUrl}/article/create`, {
      author: author,
      title: title,
      body: body,
      tags: tags,
    });
  }

  searchArticles(limit: number = 10, skip: number = 0, query: string | null) {
    return this.http.get(
      `${environment.apiUrl}/article/search?limit=${limit}&skip=${skip}${
        query == null ? '' : `&search=${query}`
      }`
    );
  }

  getArticle(articleID: string) {
    return this.http.get(`${environment.apiUrl}/article/${articleID}/get`);
  }

  updateArticle(
    articleID: string,
    title: string,
    body: string,
    tags: string[]
  ) {
    return this.http.put(`${environment.apiUrl}/article/${articleID}/update`, {
      title: title,
      body: body,
      tags: tags,
    });
  }

  deleteArticle(articleID: string) {
    return this.http.delete(
      `${environment.apiUrl}/article/${articleID}/delete`
    );
  }

  commentArticle(articleID: string, userID: string, comment: string) {
    return this.http.post(`${environment.apiUrl}article/${articleID}/comment`, {
      author: userID,
      body: comment,
    });
  }

  searchArticleComments(
    articleID: string,
    limit: number = 10,
    skip: number = 0
  ) {
    return this.http.get(
      `${environment.apiUrl}/article/${articleID}/comments/search?limit=${limit}&skip=${skip}`
    );
  }
}
