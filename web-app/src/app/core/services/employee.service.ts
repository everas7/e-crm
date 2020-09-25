import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/core/models/employee';

@Injectable()
export class EmployeeService {
  baseUrl = environment.apiUrl + '/employees';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + `/${id}`);
  }

  create(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
}
