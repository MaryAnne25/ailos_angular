import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'ai-side-menu',
  templateUrl: './side-menu.component.html',
})

export class SideMenuComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "sandwich-menu",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/menu.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/search.svg")
    );
  }
}
