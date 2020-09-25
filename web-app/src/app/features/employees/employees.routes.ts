import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

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
    ],
  },
];
