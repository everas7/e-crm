import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { routes } from './employees.routes';
import { EmployeeDetailsResolver } from './_resolvers/employee-details.resolver';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ListComponent, DetailsComponent, EmployeesFormComponent],
  providers: [EmployeeDetailsResolver],
})
export class EmployeesModule {}
