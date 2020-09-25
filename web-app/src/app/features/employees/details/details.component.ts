import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee';
import { ActivatedRoute, Router } from '@angular/router';

import { ListViewItem } from 'src/app/shared/list-view/list-view.component';
import {
  formatAsPhone,
  formatAsCedula,
} from 'src/app/core/helpers/StringHelper';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  employee: Employee;
  general: ListViewItem[];
  contact: ListViewItem[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEmployee();
  }

  loadEmployee() {
    this.route.data.subscribe((data) => {
      this.employee = data.employee;
      if (!!this.employee) {
        this.employee.id = this.route.snapshot.params.id;
      }
      this.initFields();
    });
  }

  initFields() {
    this.general = [
      {
        header: 'Names',
        content: this.employee.name,
      },
      {
        header: 'Last Names',
        content: this.employee.lastName,
      },
      {
        header: 'ID Document',
        content: formatAsCedula(this.employee.idDocument),
      },
    ];
    this.contact = [
      {
        header: 'Phone',
        content: formatAsPhone(this.employee.phone),
      },
      {
        header: 'Department',
        content: this.employee.department,
      },
    ];
  }

  get employeeFullName() {
    return this.employee.name + ' ' + this.employee.lastName;
  }

  onDelete() {
    this.employeeService.delete(this.employee.id).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }

  onEdit() {
    this.router.navigate([`/employees/${this.employee.id}/edit`]);
  }
}
