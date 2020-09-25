import { Component, OnInit, Input } from '@angular/core';

export interface TableColumn {
  label: string;
  field: string;
}

export interface TableRow {
  [field: string]: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() rows: TableRow[];
  @Input() cols: TableColumn[];
  displayedColumns: string[];
  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.cols.map((col) => col.field);
  }
}
