import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
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
import { ProfileComponent } from '../profile/profile.component';
import { RouterLink } from '@angular/router';

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
    ProfileComponent,
    RouterLink,
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit
{
  @Input() inputParameter: string = '';
  @Output() messageEvent = new EventEmitter();
  userName: string = 'Julissa Andrea';
  elementInput: boolean = false;
  elementNgSwitch: boolean = false;
  elementFor: boolean = false;
  elementNgContent: boolean = false;
  elementComponentOutlet: boolean = false;
  elementViewContainer: boolean = false;
  dateStart: string = '2024-01';
  dateEnd: string = '2024-12';
  dateMax: string = '2024-12';
  usersObj: Array<any> = [
    { id: 11, name: 'Julissa', email: 'julissa@gmail.com' },
    { id: 12, name: 'Andrea', email: 'andrea@gmail.com' },
    { id: 13, name: 'Javela', email: 'javela@gmail.com' },
    { id: 14, name: 'Valencia', email: 'valencia@gmail.com' },
    { id: 15, name: 'Diana', email: 'diana@gmail.com' },
  ];
  currentPage: number = Math.floor(Math.random() * 100) + 1;
  countDoCheck: number = 0;
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    console.log('OnInit Triggers componente General');
  }

  ngDoCheck(): void {
    if (this.countDoCheck < 5) {
      console.log('DoCheck Triggers componente General', this.countDoCheck);
      this.countDoCheck++;
    }
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  keyupFilter(user: HTMLInputElement): void {
    console.log('KeyUp Triggers...', this.userName);
    this.userName = user.value;
  }

  updateUserName(username: HTMLInputElement): void {
    this.userName = username.value;
  }

  addItem(): void {
    let user = { id: 16, name: 'Marcela' };
    this.usersObj.push(user);
    this.messageEvent.emit(Math.floor(Math.random() * 100) + 1);
  }

  onDelete1(user: object): void {
    let index = this.usersObj.indexOf(user);
    this.usersObj.splice(index, 1);
  }

  onDelete2(index: number): void {
    this.usersObj.splice(index, 1);
  }

  loadComponent1() {
    return TemporalComponent;
  }

  loadComponent2(): void {
    this.viewContainer.createComponent(Temporal1Component);
  }

  removeComponent(): void {
    this.viewContainer.remove();
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit Triggers componente General');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked Triggers componente General');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Triggers component Gereral');
  }

  onChange(): void {
    this.dateMax = `${this.dateStart.substring(0, 4)}-12`;
    var monthStart = Number(this.dateStart.substring(5));
    var monthEnd = Number(this.dateEnd.substring(5));

    if (monthStart > monthEnd) {
      this.dateEnd = this.dateMax;
    }
    else {
      this.dateEnd = `${this.dateStart.substring(0, 4)}${this.dateEnd.substring(4)}`;
    }
  }
}
