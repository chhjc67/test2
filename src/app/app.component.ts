import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { GeneralComponent } from './components/test/general/general.component';
import { ProfileComponent } from './components/test/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralComponent, ProfileComponent],
  template: `<router-outlet />
    <app-general
      [inputParameter]="message"
      (messageEvent)="reciveMessage($event)"
    >
      <p selector1>usando ng-content (selector1)</p>
      <p selector2>usando ng-content (selector2)</p>
    </app-general>
    <app-profile [inputParameter]="message"></app-profile>`,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
  message: string = 'Texto enviado a componente hijo...';
  @ViewChild(GeneralComponent) viewChildObj: any;

  constructor() {
    console.log('Log 1:' + this.menuItems);
  }

  ngAfterViewInit() {
    console.log(
      'Mensaje recido desde componente hijo...' + this.viewChildObj.userName
    );
  }

  reciveMessage(message: string) {
    console.log('Mensaje recido desde componente hijo por evento...' + message);
  }
}
