import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-hightlight]',
})
export class HighLightText implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.background = 'red';
  }
}
