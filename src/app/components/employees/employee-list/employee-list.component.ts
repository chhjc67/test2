import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Employee } from '../../../core/model/employee';
//import { EmployeeService } from '../data-access/employees.service'

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: `
    <p>
      employee-list works!
    </p>
  `,
  styles: ``
})
export class EmployeeListComponent {

}
