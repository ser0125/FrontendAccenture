import { AbstractControl } from '@angular/forms';

export function ValidateSalary(control: AbstractControl) {
    if ((control.value !== undefined && control.value !== '' && control.value != null)) {
            if (control.value < 0) {
            return  { negativeSalary: true };
        } else if (!Number.isInteger(control.value)) {
            return  { notInteger: true };
        } else if (control.value < 100000) {
            return  { lowSalary: true };
        }
        return null;
        }
    }
