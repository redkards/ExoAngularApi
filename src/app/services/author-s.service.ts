import { Author } from './../models/author.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorSService {
  private apiUrl = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  getAllAuthors(): Observable<Author[]> {
    {
      return this.httpClient.get<Author[]>(`${this.apiUrl}/api/authors`);
    }
  }

  getAuthorById(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`${this.apiUrl}/api/authors/${id}`);
  }

  addAuthor(auteur: Author): Observable<Author> {
    return this.httpClient.post<Author>(`${this.apiUrl}/api/authors`, auteur);
  }

  updateAuthor(auteur: Author, id: number): Observable<Author> {
    return this.httpClient.put<Author>(
      `${this.apiUrl}/api/authors/${id}`,
      auteur
    );
  }

  deleteAuthor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/api/authors/${id}`);
  }
}
