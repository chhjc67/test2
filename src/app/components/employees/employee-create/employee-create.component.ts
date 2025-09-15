import { Component } from '@angular/core';
import { Employee } from '../../../core/model/employee';
import { EmployeeService } from '../data-access/employees.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-create',
    imports: [ReactiveFormsModule],
    template: `
    <h2>Create: Employee</h2>
    <div class="app-component">
      <form [formGroup]="employeeForm" (ngSubmit)="onSubmit()">



        <input
          type="text"
          placeholder="Name"
          formControlName="name"
          [class.ng-invalid]="employeeForm.get('name')?.invalid && employeeForm.get('name')?.touched"
        />
        @if (employeeForm.get('name')?.invalid && employeeForm.get('name')?.touched) {
          <div class="alert">
            @if (employeeForm.get('name')?.hasError('required')) {
              <p>Name is required..</p>
            }
            @if (employeeForm.get('name')?.hasError('minlength')) {
              <p>Name must be atleast 2 charectors long..</p>
            }
            @if (employeeForm.get('name')?.hasError('maxlength')) {
              <p>Name must be 30 charectors long..</p>
            }
          </div>
        }
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          formControlName="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          [class.ng-invalid]="employeeForm.get('email')?.invalid && employeeForm.get('email')?.touched"
        />
        @if (employeeForm.get('email')?.invalid && employeeForm.get('email')?.touched) {
          <div class="alert">
            @if (employeeForm.get('email')?.hasError('required')) {
              <p>Email is required..</p>
            }
            @if (employeeForm.get('email')?.hasError('pattern')) {
              <p>Email is invalid..</p>
            }
          </div>
        }
        <br />
        <br />

        <br />
        <br />
        <button type="submit" [disabled]="employeeForm.invalid">Submit</button>
      </form>
    </div>

<!--     <div>
      <button (click)="addEmployee()">Add</button>
      <button (click)="navigationUrl('employees')">Volver al listado</button>
    </div>
 -->  `,
    styles: ``
})
export class EmployeeCreateComponent {
  employee: Employee = {
    id: 0,
    code: '',
    name: '',
    mobile: 0,
    email: '',
    create: new Date(),
  };
  employeeForm = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(10000)]),
    code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    mobile: new FormControl(0),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private employeeService: EmployeeService,
    private route: Router,
  ) {}

  onSubmit() {
    this.employee = {
      id: Number(this.employeeForm.get('id') || 0),
      code: (this.employeeForm.get('code') || '').toString(),
      name: (this.employeeForm.get('name') || '').toString(),
      mobile: Number(this.employeeForm.get('mobile') || 0),
      email: (this.employeeForm.get('email') || '').toString(),
      create: new Date(),
    };

    console.log(this.employeeForm.get('name'));
    console.log(this.employeeForm.get('email'));
    this.employeeService.addEmployeeInfo(this.employee);
    this.route.navigate(['employees']);
  }

  navigationUrl(path: string) {
    this.route.navigate([path]);
  }
}
