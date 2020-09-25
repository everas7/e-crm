import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: 'employees',
    loadChildren: './features/employees/employees.module#EmployeesModule',
  },
];
