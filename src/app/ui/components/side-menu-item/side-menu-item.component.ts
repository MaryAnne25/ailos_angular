import { Component, Input } from '@angular/core'
import { SideMenu } from '../../../domain/model/side-menu.model'
import { showHideLabel } from '../../../../assets/animations'

@Component({
  selector: 'ai-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  animations: [showHideLabel]
})

export class SideMenuItemComponent {

  @Input() icon: string
  @Input() label: string
  @Input() iconType: string
  @Input() isExpanded: boolean
  @Input() block?: string

  isLabelVisible: boolean
  expanded = SideMenu.Expanded
  collapsed = SideMenu.Collapsed

  toggleLabelVisibility(): void {
    this.isLabelVisible = !this.isLabelVisible
  }
}
