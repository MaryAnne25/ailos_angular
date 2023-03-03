import { Component, OnInit } from '@angular/core'
import { slideNavigation } from '../../../../assets/animations'
import { Observable } from 'rxjs'
// @ts-ignore
import * as tailwindConfig from 'tailwind.config'
import { SideMenu } from '../../../domain/model/side-menu.model'

@Component({
  selector: 'ai-content',
  templateUrl: './content-page.component.html',
  animations: [slideNavigation]
})
export class ContentPageComponent implements OnInit {
  sideMenuExpanded: boolean
  isSideMenuExpanded: Observable<boolean>
  contentPageSizes = tailwindConfig.theme?.extend?.width
  sideMenu = SideMenu
  isCpfValid: boolean

  ngOnInit(): void {
    this.isSideMenuExpanded.subscribe((sideMenuExpanded) => this.sideMenuExpanded = sideMenuExpanded)
  }

  verifyCpfValidity(value: boolean): void {
    this.isCpfValid = value
  }
}
