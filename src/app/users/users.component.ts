import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  userName: string = '';
  userList: string[] = [];

  onUserAdded() {
    this.userList.push(this.userName);
    this.userName = '';
  }
}
