import { Injectable } from '@angular/core';
import { Employee } from '../../../core/model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employeeList: Employee[] = [];

  constructor() {
    console.log('Constructor EmployeeService se creo...');
  }

  ngOnInit() {
    this.employeeList = [
      {
        id: 1,
        name: 'Roger Smith',
        code: 'ET0002334',
        mobile: 9830098300,
        email: 'roger.smith@yahoo.com',
        create: new Date(),
      },
      {
        id: 2,
        name: 'Alex Bob',
        code: 'ET0002992',
        mobile: 9830198301,
        email: 'alex.bob@gmail.com',
        create: new Date(),
      },
      {
        id: 3,
        name: 'Stephen Ken',
        code: 'ET0001675',
        mobile: 88830098312,
        email: 'stephen.123@yahoo.com',
        create: new Date(),
      },
    ];
  }

  getEmployeeList() {
    if (this.employeeList.length == 0) {
      this.ngOnInit();
    }
    return this.employeeList;
  }

  initializeData() {
    this.getEmployeeList();
  }

  getEmployee(id: number) {
    return this.employeeList.find((ex) => ex.id == id);
  }

  addEmployeeInfo(employee: Employee) {
    this.employeeList.push(employee);
  }
}
