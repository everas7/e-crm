import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
  ],
})
export class SharedModule {}
