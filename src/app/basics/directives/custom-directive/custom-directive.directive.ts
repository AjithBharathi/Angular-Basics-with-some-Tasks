import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input() bgColor:string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.elementRef.nativeElement.style.fontWeight = "normal";
    this.elementRef.nativeElement.style.backgroundColor = "initial";
  }

}
