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

  import(file: File) {
    const data = new FormData();
    data.append('file', file);
    return this.http
      .post<any>(this.baseUrl + '/import', data, {
        responseType: 'blob' as any,
      })
      .subscribe((response) =>
        this.downloadFile(
          response,
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
      );
  }

  update(id: number, employee: Employee) {
    return this.http.patch(this.baseUrl + `/${id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

  downloadFile(data: any, type: string) {
    const blob = new Blob([data], { type: type });
    const downloadURL = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = 'results.xlsx';
    link.click();
  }
}
