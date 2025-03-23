import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: ` <p>profile works!</p> `,
  styles: ``,
})
export class ProfileComponent implements OnChanges {
  @Input() inputParameter: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        switch (propName) {
          case 'inputParameter': {
            console.log('OnChanges triggred:', change.currentValue);
          }
        }
      }
    }
  }
}
