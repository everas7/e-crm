import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
  ],
  declarations: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
    ButtonComponent,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
