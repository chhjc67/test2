import { Routes } from '@angular/router';
import { EmployeeListComponent }  from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const EMPLOYEES_ROUTES: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
];