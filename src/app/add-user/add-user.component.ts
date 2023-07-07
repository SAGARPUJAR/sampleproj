import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userName: string = '';
  @Output() _userAdded = new EventEmitter<string>();
  onUserAdded() {
    this._userAdded.emit(this.userName);
    this.userName = '';
  }
}
