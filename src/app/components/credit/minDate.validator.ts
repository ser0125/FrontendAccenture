import { AbstractControl } from '@angular/forms';

export function ValidateMinDate(control: AbstractControl) {
    const todayDate = new Date();
    const year_as_milliseconds = 31556952000;
    let diff_in_year;
    if ((control.value !== undefined && control.value !== '' && control.value != null)) {
        diff_in_year = ((new Date(todayDate).getTime() - new Date(control.value).getTime()) / year_as_milliseconds);
        if (diff_in_year > 90) {
            return  { olderAge: true };
        }
        return null;
        }
    }

