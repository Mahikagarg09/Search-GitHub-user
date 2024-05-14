import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Repository } from './models/repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'fyle-frontend-challenge'; 
  repositories: Repository[] = [];
  isLoading: boolean = false;
  user: any;
  totalRepositories: number = 0;
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 0; 
  searchedUserNotFound: boolean = false;

  constructor(private apiService: ApiService) {}

  searchByUsername(username: string): void {
    this.user = null; 
    this.repositories = [];
    this.isLoading = true;
    this.searchedUserNotFound = false;
    this.apiService.getUser(username).subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        console.error('Error fetching user details:', error);
        this.isLoading = false;
        this.searchedUserNotFound = true;
      }
    );
    this.fetchRepositories(username, this.currentPage, this.pageSize);
  }

  fetchRepositories(username: string, page: number, perPage: number): void {
    this.apiService.getRepos(username, page, perPage).subscribe(
      (repositories: Repository[]) => {
        this.repositories = repositories;
        this.isLoading = false;
        this.totalRepositories = repositories.length;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.isLoading = false;
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchRepositories(this.user.login, this.currentPage, this.pageSize);
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
    this.fetchRepositories(this.user.login, this.currentPage, this.pageSize);
  }
}
