import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeeDetailsResolver } from './_resolvers/employee-details.resolver';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employees',
      },
      {
        path: 'employees',
        component: ListComponent,
      },
      {
        path: 'employees/create',
        component: EmployeesFormComponent,
      },
      {
        path: 'employees/:id',
        component: DetailsComponent,
        resolve: { employee: EmployeeDetailsResolver },
      },
    ],
  },
];
