import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent
  ],
  exports: [
    SideMenuComponent,
    HeaderComponent
  ],
  imports: [
    MatIconModule

  ]
})
export class ComponentsModule {

}
