import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'ai-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() title: string
  @Input() subtitle: string
  @Input() personName?: string
  @Input() cpfSituation?: string;
  @Input() accountNumber?: string
  @Input() type: string
  @Input() block: string
  @Output() click = new EventEmitter<Event>()
  isPerson: boolean
  isAccount: boolean
  isRegular: boolean;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "card",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/credit-card.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "person",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/user-icon.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "check",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/check-circle.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "cross",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/cross-circle.svg")
    )
  }

  ngOnInit(): void {
    this.isPerson = this.type.toLowerCase() == 'person'
    this.isAccount = this.type.toLowerCase() == 'account'
    this.isRegular = this.cpfSituation?.toLowerCase() == 'regular'
  }
}
