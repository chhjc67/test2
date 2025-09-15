import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-temporal',
    imports: [],
    template: `
    <p>temporal works! llamado con *ngComponentOutlet desde GeneralComponent</p>
    <dl>
      <dd>
        <a href="https://www.youtube.com/watch?v=BzE7MA0dwvE"
          >#59 What is View Encapsulation | Understanding View Encapsulation</a
        >
      </dd>
      <dd>
        <a href="https://www.youtube.com/watch?v=-N32Gt_csUk"
          >#69 Creating & Using an Observable | Understanding Observables &
          RxJS</a
        >
      </dd>
      <dd>
        <a href="https://www.youtube.com/watch?v=6Jpo3NWiFP8"
          >Angular Pipes in Depth | Angular Concepts made easy</a
        >
      </dd>
      <dd>
        <a href="https://www.youtube.com/watch?v=SRgVu0bYykY"
          >Dynamic Components in Angular | Angular Concepts made easy</a
        >
      </dd>
    </dl>
    <!-- <div>
      <pagination [currentPage]="currentPage" [limit]="20" [total]="100" (changePage)="changePage($event)" style="margin-left: 1rem;"/>
      <p>Página#&nbsp;<b>{{currentPage}}</b></p>   
    </div> -->
  `,
    styles: ``
})
export class TemporalComponent implements AfterViewInit, OnDestroy {
  constructor() {
    console.log('Constructo Triggers componente Temporal');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Triggers component Temporal');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy Triggers component Temporal');
  }
}
