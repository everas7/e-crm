import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Optional,
  Self,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormControl,
  FormGroupDirective,
  NgForm,
  NgControl,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() hint: string;
  @Input() error: string;
  @Input() disabled: boolean;
  @Input() mask: string;
  uniqueNameControl: FormControl = new FormControl('');

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.uniqueNameControl.valueChanges.subscribe((val) =>
      this.setInputValue(val)
    );
  }

  get errorState() {
    return this.ngControl.errors !== null && !!this.ngControl.touched;
  }

  ngOnInit() {
    const validators = this.ngControl.control.validator;
    this.uniqueNameControl.setValidators(validators ? validators : null);
    this.uniqueNameControl.updateValueAndValidity();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any = ''): void {
    this.uniqueNameControl.patchValue(obj);
  }

  setInputValue(val = '') {
    this.uniqueNameControl.patchValue(val, { emitEvent: false });
    this.onChanged(val);
  }
  onInputBlur() {
    this.onTouched();
  }
  onClick() {}
}
