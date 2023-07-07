import { Component } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css'],
})
export class LocalReferenceComponent {
  Add(input: HTMLInputElement) {
    console.log(input.value);
  }
}
