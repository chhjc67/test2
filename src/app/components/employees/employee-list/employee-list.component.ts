import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../core/model/employee';
import { EmployeeService } from '../data-access/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: ` <p style="padding-left: 1em;">employee-list works!</p> `,
  styles: ``,
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployeeList();
  }

  navigationUrl(path: string, id: number) {
    this.route.navigate([path, id]);
  }
}
