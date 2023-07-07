import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent {
  @ViewChild('userName') userName: ElementRef;
  constructor() {}
  Add() {
    // console.log(input.value);
    console.log(this.userName.nativeElement.value);
  }
}
