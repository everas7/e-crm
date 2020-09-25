import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getControlErrorMessage } from 'src/app/core/helpers/ErrorMessagesHelper';
import {
  cedulaValidator,
  phoneNumberValidator,
} from 'src/app/core/helpers/ValidatorHelpers';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/core/models/employee';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css'],
})
export class EmployeesFormComponent implements OnInit {
  form: FormGroup;
  employee: Employee;
  editMode = false;
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      idDocument: ['', [Validators.required, cedulaValidator]],
      phone: ['', [Validators.required, phoneNumberValidator]],
    });

    this.loadEmployee();
  }

  loadEmployee() {
    this.route.data.subscribe((data) => {
      this.employee = data.employee;
      if (!!this.employee) {
        this.employee.id = this.route.snapshot.params.id;
        this.editMode = true;
        this.initFields();
      }
    });
  }

  initFields() {
    this.form.setValue({
      name: this.employee.name,
      lastName: this.employee.lastName,
      idDocument: this.employee.idDocument,
      department: this.employee.department,
      phone: this.employee.phone,
    });
  }

  get employeeFullName() {
    return this.form.get('name').value + ' ' + this.form.get('lastName').value;
  }

  getErrorMessage(control, label) {
    return getControlErrorMessage(control, label);
  }

  onSubmit() {
    if (this.editMode) {
      this.employeeService
        .update(this.employee.id, this.form.getRawValue())
        .subscribe(() => {
          this.router.navigate(['/employees']);
        });
    } else {
      this.employeeService.create(this.form.getRawValue()).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
