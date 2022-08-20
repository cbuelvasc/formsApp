import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noCanBeStrider(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  validateFields(fieldOne: string, fieldTwo: string): ValidationErrors | null {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fOne = formGroup.get(fieldOne)?.value;
      const fTwo = formGroup.get(fieldTwo)?.value;
      if (fOne !== fTwo) {
        formGroup.get(fieldTwo)?.setErrors({
          fieldsValuesDifferents: true,
        });
        return {
          fieldsValuesDifferents: true,
        };
      }
      formGroup.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }
}
