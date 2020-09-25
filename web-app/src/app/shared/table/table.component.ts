import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() onRowClick = new EventEmitter();
  displayedColumns: string[];
  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.cols.map((col) => col.field);
  }

  handleRowClick(row) {
    this.onRowClick.emit(row);
  }
}
