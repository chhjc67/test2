import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgClass,
  NgFor,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  NgComponentOutlet,
} from '@angular/common';
import { TemporalComponent } from '../temporal/temporal.component';
import { Temporal1Component } from '../temporal1/temporal1.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgFor,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgTemplateOutlet,
    NgComponentOutlet,
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent {
  @Input() inputParameter: string = '';
  @Output() messageEvent = new EventEmitter();
  userName: string = 'Julissa Andrea';
  elementInput: boolean = false;
  elementNgSwitch: boolean = false;
  elementFor: boolean = false;
  elementNgContent: boolean = false;
  elementComponentOutlet: boolean = false;
  elementViewContainer: boolean = false;

  usersObj: Array<any> = [
    { id: 11, name: 'Julissa', email: 'julissa@gmail.com' },
    { id: 12, name: 'Andrea', email: 'andrea@gmail.com' },
    { id: 13, name: 'Javela', email: 'javela@gmail.com' },
    { id: 14, name: 'Valencia', email: 'valencia@gmail.com' },
    { id: 15, name: 'Diana', email: 'diana@gmail.com' },
  ];
  currentPage: number = 1;
  randomNumber: number = 0;

  constructor(private viewContainer: ViewContainerRef) {}

  changePage(page: number): void {
    this.currentPage = page;
  }

  keyupFilter(user: HTMLInputElement) {
    console.log(this.userName);
    this.userName = user.value;
  }

  updateUserName(username: HTMLInputElement) {
    this.userName = username.value;
  }

  addItem() {
    let user = { id: 16, name: 'Marcela' };
    this.usersObj.push(user);
    this.messageEvent.emit(Math.floor(Math.random() * 100) + 1);
  }

  onDelete1(user: object) {
    let index = this.usersObj.indexOf(user);
    this.usersObj.splice(index, 1);
  }

  onDelete2(index: number) {
    this.usersObj.splice(index, 1);
  }

  loadComponent1() {
    return TemporalComponent;
  }

  loadComponent2() {
    this.viewContainer.createComponent(Temporal1Component);
  }

  removeComponent() {
    this.viewContainer.remove();
  }
}
