import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/models/employee';
import { ActivatedRoute } from '@angular/router';

import { ListViewItem } from 'src/app/shared/list-view/list-view.component';
import { formatAsPhone, formatAsCedula } from 'src/app/core/helpers/StringHelper';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  employee: Employee;
  general: ListViewItem[];
  contact: ListViewItem[];

  constructor(private route: ActivatedRoute) {}

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
}
