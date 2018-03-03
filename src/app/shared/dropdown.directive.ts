import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') open = false;

  ngOnInit(): void {
  }

  @HostListener('click') toggleClass(eventData: Event) {
    this.open = !this.open;
  }

}
