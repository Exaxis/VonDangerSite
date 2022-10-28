/**
 * https://www.damirscorner.com/blog/posts/20211022-MouseWheelScrollingInAngular.html
 */


import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})
export class HorizontalScrollDirective {

  constructor(private element: ElementRef) { }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent){
    this.element.nativeElement.scrollLeft += event.deltaY;
  }

}
