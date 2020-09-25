import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';

import { TableColumn } from 'src/app/shared/table/table.component';
import { Employee } from 'src/app/core/models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cols: TableColumn[];
  rows: Observable<Employee[]>;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cols = [
      {
        label: 'Names',
        field: 'name',
      },
      {
        label: 'Last Names',
        field: 'lastName',
      },
      {
        label: 'Department',
        field: 'department',
      },
    ];
    this.rows = this.employeeService.getAll();
  }

  handleRowClick(employee) {
    this.router.navigate([`employees/${employee.id}`]);
  }
}
