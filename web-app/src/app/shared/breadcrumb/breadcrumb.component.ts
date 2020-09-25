import { Component, OnInit, Input } from '@angular/core';

export interface BreadcrumbItem {
  title: string;
  routerLink?: string[];
  queryParams?: string[];
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() items: BreadcrumbItem[] = [];
  constructor() {}

  ngOnInit() {}
}
