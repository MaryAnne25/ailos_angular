import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ai-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  @Input() block: string;
  @Output() click = new EventEmitter<Event>();
  isPrimary: boolean;
  isSecondary: boolean;

  ngOnInit(): void {
    this.isPrimary = this.type.toLowerCase() == 'primary';
    this.isSecondary = this.type.toLowerCase() == 'secondary';
  }

  clicked(event: Event): void {
    this.click.emit(event);
  }
}
