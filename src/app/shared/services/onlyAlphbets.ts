import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyLettersAndSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = /^[A-Za-z\s]*$/.test(control.value);
    return valid ? null : { onlyLettersAndSpaces: true };
  };
}
