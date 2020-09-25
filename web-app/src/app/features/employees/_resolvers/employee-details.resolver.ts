import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {Employee} from '../../../core/models/employee';
import {EmployeeService} from '../../../core/services/employee.service';

@Injectable()
export class EmployeeDetailsResolver implements Resolve<Employee> {
  constructor(private employeeService: EmployeeService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee> {
    const employee = this.router.getCurrentNavigation().extras?.state?.employee;
    if (!!employee) {
      return of(employee);
    }
    return this.employeeService.get(route.params.id);
  }
}
