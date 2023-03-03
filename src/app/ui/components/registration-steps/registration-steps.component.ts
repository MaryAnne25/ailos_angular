import { Component } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ai-registration-steps',
  templateUrl: './registration-steps.component.html'
})
export class RegistrationStepsComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/circle.svg")
    )
    this.matIconRegistry.addSvgIcon(
      "filled-circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/filled-circle.svg")
    )
  }

}
