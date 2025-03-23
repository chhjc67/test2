import { Component } from '@angular/core';

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
export class Temporal1Component {
  dateTime: string = Date();
}
