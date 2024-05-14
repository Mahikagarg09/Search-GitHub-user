import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent {
  @Input() repositories: Repository[] = [];
  @Input() totalRepositories: number = 0; 
  @Input() pageSize: number = 10;
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>(); 
  @Input() totalPages: number = 0;
 
  currentPage: number = 1;

  constructor() { }

  onPageChange(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onPageSizeChange(event:any) {
    const size = event.target.value ? +event.target.value : this.pageSize; 
    this.pageSize = size;
    this.currentPage = 1;
    this.pageSizeChange.emit(size);
  }
}
