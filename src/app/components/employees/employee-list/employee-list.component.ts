import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../core/model/employee';
import { EmployeeService } from '../data-access/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: `
    <h2>List: Employee</h2>
    <div>
      <button (click)="navigationUrl('employees/create')">
        Add employee
      </button>
      <ul>
        @for (item of employeeList; track $index) {
          <li>
            #{{ $index }} code:{{ item.code }} name:{{ item.name }} email:{{
              item.email
            }}
            <button (click)="navigationUrl('employees/detail', item.id)">
              Detail
            </button>
          </li>
        } @empty {
          <li>There are no items.</li>
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class EmployeeListComponent implements OnInit {
  public employeeList: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployeeList();
  }

  navigationUrl(path: string, id?: number) {
    if (id == null) {
      this.route.navigate([path]);
    } else
    {
      this.route.navigate([path, id]);
    }
  }
}
