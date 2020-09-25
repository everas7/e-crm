import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
    ButtonComponent,
    InputComponent,
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    ListViewComponent,
    BreadcrumbComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class SharedModule {}
