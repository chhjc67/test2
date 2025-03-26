import { NgSwitch, NgSwitchCase } from '@angular/common';
import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  template: `
    <div [ngSwitch]="onChange">
      <p *ngSwitchCase="true">
        Lanzo el evento ngOnChange (Componente profile)
      </p>
      <p *ngSwitchCase="false">
        No ha cambiado inputParamenter (Componente profile)
      </p>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent
  implements OnChanges, OnInit, DoCheck, AfterViewInit
{
  @Input() inputParameter: string = '';
  onChange: boolean = false;
  countDoCheck: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let change = changes[propName];
        switch (propName) {
          case 'inputParameter': {
            console.log(
              'OnChanges triggred componente Profile (inputParameter):',
              change.currentValue
            );
            this.onChange = true;
          }
        }
      }
    }
  }

  ngOnInit(): void {
    console.log('OnInit Triggers componente Profile');
  }

  ngDoCheck(): void {
    if (this.countDoCheck < 5) {
      console.log('DoCheck Triggers componente Profile', this.countDoCheck);
      this.countDoCheck++;
    }
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Triggers component Profile');
  }
}
