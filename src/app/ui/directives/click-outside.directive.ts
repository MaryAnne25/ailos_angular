import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[aiClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef: ElementRef) {
  }

  @Output() aiClickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target']) onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (targetElement && !$.contains(this.elementRef.nativeElement, targetElement)) {
      this.aiClickOutside.emit(event);
    }
  }
}
