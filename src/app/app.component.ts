import { Component, OnInit, ViewChild } from '@angular/core';
import { slideNavigation } from '../assets/animations';
import { Subject } from 'rxjs';
// @ts-ignore
import * as tailwindConfig from 'tailwind.config';
import { ContentPageComponent } from './ui/components/content-page/content-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideNavigation]
})
export class AppComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ContentPageComponent;
  title = 'ailos-angular'
  isSideMenuExpanded: boolean
  menuExpanded = new Subject<boolean>()

  ngOnInit(): void {
    this.content.isSideMenuExpanded = this.menuExpanded;
  }

  setSideMenuExpanded(value: boolean): void {
    this.isSideMenuExpanded = value;
    this.menuExpanded.next(this.isSideMenuExpanded);

  }
}
