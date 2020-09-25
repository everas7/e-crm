import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatTableModule],
  declarations: [NavbarComponent, TableComponent],
  exports: [NavbarComponent, TableComponent],
})
export class SharedModule {}
