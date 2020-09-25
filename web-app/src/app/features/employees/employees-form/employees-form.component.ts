import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getControlErrorMessage } from 'src/app/core/helpers/ErrorMessagesHelper';
import {
  cedulaValidator,
  phoneNumberValidator,
} from 'src/app/core/helpers/ValidatorHelpers';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css'],
})
export class EmployeesFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      idDocument: ['', [Validators.required, cedulaValidator]],
      phone: ['', [Validators.required, phoneNumberValidator]],
    });
  }

  get employeeFullName() {
    return this.form.get('name').value + ' ' + this.form.get('lastName').value;
  }

  getErrorMessage(control, label) {
    return getControlErrorMessage(control, label);
  }

  onSubmit() {
    this.employeeService.create(this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
