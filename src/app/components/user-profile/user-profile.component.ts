import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  @Input() user: any;

  constructor(private githubService: ApiService) { }

  ngOnInit(): void {
    this.githubService.getUser('username').subscribe(user => {
      this.user = user;
    });
  }
}
