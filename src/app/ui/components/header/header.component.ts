import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ai-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "notification-bell",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/notification-bell.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "settings",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/settings.svg")
    )
  }
}
