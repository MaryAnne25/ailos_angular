import { Component, Input } from '@angular/core'

@Component({
  selector: 'ai-footer',
  templateUrl: './footer.component.html',
})

export class FooterComponent {
  @Input() validCPF = false
}
