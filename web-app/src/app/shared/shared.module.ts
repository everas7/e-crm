import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatListModule],
  declarations: [NavbarComponent, TableComponent, ListViewComponent],
  exports: [NavbarComponent, TableComponent, ListViewComponent],
})
export class SharedModule {}
