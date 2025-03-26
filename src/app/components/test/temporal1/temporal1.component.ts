import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-temporal1',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>temporal1 works! {{ dateTime }}</p>
    </div>
  `,
  styles: `div {margin: 20px;
    padding: 4px;
    border: solid 1px green; }`,
})
export class Temporal1Component
  implements AfterViewInit, AfterViewChecked, OnDestroy
{
  dateTime: string = Date();

  constructor() {
    console.log('Constructo Triggers componente Temporal1');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Triggers component Temporal1');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked Triggers component Temporal1');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy Triggers component Temporal1');
  }
}
