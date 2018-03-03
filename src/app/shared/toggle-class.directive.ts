import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective implements OnInit {
  @Input() toggleClassName;
  added = false;

  ngOnInit(): void {
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleClass(eventData: Event) {

    if (!this.added) {
      this.renderer.addClass(this.elementRef.nativeElement, this.toggleClassName);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.toggleClassName);
    }
    this.added = !this.added;

  }

}
