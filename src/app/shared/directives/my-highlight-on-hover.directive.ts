import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyHighlightOnHover]'
})
export class MyHighlightOnHoverDirective {

  // Observe same value in variable name of "selector" on line:4 
  @Input() appMyHighlightOnHover: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.appMyHighlightOnHover || '#2ecc71');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
