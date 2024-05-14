import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(githubUsername: string, page: number, perPage: number): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(`https://api.github.com/users/${githubUsername}/repos?page=${page}&per_page=${perPage}`);
  }
}
