import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../data-access/employees.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-employee-detail',
    imports: [JsonPipe],
    template: `
    <h2>Detail: Employee</h2>
    <div>
      <h3>{{ this.employee | json }}</h3>
      <button (click)="navigationUrl('employees')">Volver al listado</button>
    </div>
  `,
    styles: ``
})
export class EmployeeDetailComponent implements OnInit {
  @Input('id') employeeId!: number;
  employee: any;

  constructor(
    private employeeService: EmployeeService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee(this.employeeId);
  }

  navigationUrl(path: string) {
    this.route.navigate([path]);
  }
}
