import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'employees',
        loadChildren: () => import('./components/employees/employee.routes').then(c => c.EMPLOYEES_ROUTES)
    },
];
