import { FormControl } from '@angular/forms';
import { CEDULA_REGEX, PHONE_NUMBER_REGEXP } from './RegexVault';

export function cedulaValidator(
  control: FormControl
): { [key: string]: boolean } | null {
  let value: string = control.value;

  value = value.replace(/\D/gi, '');

  if (!CEDULA_REGEX.test(value)) {
    return { valid: false };
  }

  return null;
}

export function phoneNumberValidator(
  control: FormControl
): { [key: string]: boolean } | null {
  let value: string = control.value;
  console.log('wtf', value);
  //remove any non digit characters
  value = value.replace(/\D/gi, '');

  if (!PHONE_NUMBER_REGEXP.test(value)) {
    return { valid: false };
  }

  return null;
}
