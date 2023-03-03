import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import {ContentPageComponent} from "./content-page/content-page.component";

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent,
    SideMenuItemComponent,
    ContentPageComponent
  ],
  exports: [
    SideMenuComponent,
    HeaderComponent,
    SideMenuItemComponent,
    ContentPageComponent
  ],
  imports: [
    MatIconModule,
    TranslateModule,
    CommonModule
  ]
})
export class ComponentsModule {

}
