import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appRendereHighlight]',
})
export class RendereHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private rendere: Renderer2) {}

  ngOnInit() {
    this.rendere.setStyle(this.element.nativeElement,'font-size', '200px');
  }

  @HostListener('mouseenter') onmouseenter(){
    this.rendere.setStyle(this.element.nativeElement,'background-color', 'red');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.rendere.setStyle(this.element.nativeElement,'background-color', 'blue');
  }

  @HostListener('click') onclick(){
    this.rendere.setStyle(this.element.nativeElement,'background-color', 'yellow');
  }
}
