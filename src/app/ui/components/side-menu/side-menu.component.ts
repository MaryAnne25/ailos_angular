import {Component, EventEmitter, Output} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { slideNavigation } from '../../../../assets/animations';
// @ts-ignore
import * as tailwindConfig from 'tailwind.config';
import { SideMenu } from '../../../domain/model/side-menu.model';

@Component({
  selector: 'ai-side-menu',
  templateUrl: './side-menu.component.html',
  animations: [slideNavigation]
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

  @Output() menuExpanded = new EventEmitter<boolean>();
  isExpanded = false;
  menuSizes = tailwindConfig.theme?.extend?.width;
  expanded = SideMenu.Expanded;
  collapsed = SideMenu.Collapsed;

  toggleCollapse(): void {
    this.isExpanded = !this.isExpanded;
    this.menuExpanded.emit(this.isExpanded);
  }
}
