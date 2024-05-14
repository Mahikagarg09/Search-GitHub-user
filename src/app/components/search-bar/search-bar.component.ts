import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @Output() searchUser = new EventEmitter<string>();
  username: string = '';

  onSearch(): void {
    this.searchUser.emit(this.username);
  }
}
