import { Component, OnInit } from '@angular/core';
import { TableColumn, TableRow } from 'src/app/shared/table/table.component';

const DATA = [
  {name: 'Nombre', lastName: 'Apellido', department: 'Sales'},
  {name: 'Nombre', lastName: 'Apellido', department: 'IT'},
]

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cols: TableColumn[];
  rows: TableRow[];
  constructor() {}

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
    this.rows = DATA;
  }
}
