import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temporal1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div>
      <p>temporal1 works! {{ dateTime }}</p>
      <form (ngSubmit)="formSubmit(f)" #f="ngForm">
        <input
          type="text"
          placeholder="Name"
          name="name"
          ngModel
          #name="ngModel"
          (change)="getValue(name)"
          [class.ng-invalid]="name.invalid && name.touched"
          required
          minlength="3"
        />
        @if(name.invalid && name.touched) {
          <div class="alert">
            @if(name.hasError('required')) {
              <p>Name is required..</p>
            } 
            @if(name.hasError('minlength')) {
              <p>Name must be atleast 3 charectors long..</p>
            }
          </div>
        }
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          ngModel
          #email="ngModel"
          [class.ng-invalid]="email.invalid && email.touched"
          required
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        @if(email.invalid && email.touched) {
          <div class="alert">
            @if(email.hasError('required')) {
              <p>Email is required..</p>
            }
            @if(email.hasError('pattern')) {
              <p>Email is invalid..</p>
            }
          </div>
        }
        <br />
        <input type="text" placeholder="Address" name="address" ngModel />
        <br />
        <button [disabled]="f.invalid">Submit</button>
      </form>
    </div>
  `,
  styles: `div {margin-left: 10px;}`,
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

  formSubmit(event: any) {
    console.log(event.value);
    console.log(event);
  }

  getValue(name: any) {
    console.log(name);
  }
}
