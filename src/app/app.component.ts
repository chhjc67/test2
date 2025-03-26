import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { GeneralComponent } from './components/test/general/general.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralComponent],
  template: `
    <router-outlet />
    <app-general
      [inputParameter]="message"
      (messageEvent)="reciveMessage($event)"
    >
      <p selector1>usando ng-content (selector1)</p>
      <p selector2>usando ng-content (selector2)</p>
    </app-general>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  message: string = 'Texto enviado al componente General...';
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
  @ViewChild(GeneralComponent) viewChildObj: any;

  constructor() {
    console.log('Constructor triggers componente App', this.menuItems);
  }

  ngAfterViewInit() {
    console.log(
      'Texto generado en el componente General...',
      this.viewChildObj.userName,
      this.viewChildObj.currentPage
    );
  }

  reciveMessage(number: string) {
    console.log(
      'Texto generado en el componente General por evento...',
      number
    );
  }
}
