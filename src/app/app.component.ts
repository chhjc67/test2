import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { GeneralComponent } from './components/test/general/general.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneralComponent],
  template: `<router-outlet />
    <app-general
      [dataInput]="message"
      (messageEvent)="reciveMessage($event)"
    />`,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
  message: string = 'Mensaje enviado a componente hijo...';
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
