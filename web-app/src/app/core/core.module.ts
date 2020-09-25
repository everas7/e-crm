import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeService } from './services/employee.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    EmployeeService,
  ]
})
export class CoreModule {}
