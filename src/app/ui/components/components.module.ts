import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page/content-page.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { CpfVerificationComponent } from './cpf-field/cpf-verification.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    SideMenuComponent,
    HeaderComponent,
    SideMenuItemComponent,
    ContentPageComponent,
    ButtonComponent,
    FooterComponent,
    CpfVerificationComponent
  ],
  exports: [
    SideMenuComponent,
    HeaderComponent,
    SideMenuItemComponent,
    ContentPageComponent,
    ButtonComponent,
    FooterComponent,
    CpfVerificationComponent
  ],
  imports: [
    MatIconModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    DirectivesModule
  ]
})
export class ComponentsModule {

}
