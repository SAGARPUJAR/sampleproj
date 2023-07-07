import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterContentInit {
  userList: string[] = [];
  @ContentChild('userName') userName: ElementRef;

  ngAfterContentInit() {
    console.log('hello');
    console.log(this.userName.nativeElement.textContent);
  }

  onUserAdded(event: string) {
    this.userList.push(event);
  }
}
