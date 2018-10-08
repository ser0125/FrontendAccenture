import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidateSalary } from './salary.validator';
import { ValidateMinDate } from './minDate.validator';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  formCredit: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formCredit = new FormGroup({
      'company': new FormControl('' ,  Validators.required),
      'nit': new FormControl('', Validators.required),
      'salary': new FormControl('', [Validators.required, ValidateSalary]),
      'startDate': new FormControl('', [Validators.required, ValidateMinDate])
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
  get form() { return this.formCredit.controls; }

  submitForm() {
    if (this.formCredit.valid) {
   const validateTime = this.validateTimeCompany(this.formCredit.controls.startDate.value);
   const salary = this.formCredit.controls.salary.value;
   this.validateSalary(validateTime, salary);
    } else {
      swal({
        type: 'error',
        title: 'Oops!',
        text: 'Revisa el formulario!'
      });
    }
  }

  validateTimeCompany(startDate: Date) {
    const actualDate = new Date().getTime();
    const _startDate = new Date(startDate).getTime();
    const year_as_milliseconds = 31556952000;
    const diff_in_year = (actualDate - _startDate) / year_as_milliseconds;
    if (diff_in_year > 1.5) {
      return true;
    }
      return false;
  }
  validateSalary(validateTime, salary) {
    if (validateTime) {
      if (salary > 800000) {
        if (salary <= 1000000) {
          swal({
            type: 'success',
            title: 'Valor Aprobado!',
            text: 'El valor aprobrado sera de $5.000.000'
          });
        } else if (salary < 4000000) {
          swal({
            type: 'success',
            title: 'Valor Aprobado!',
            text: 'El valor aprobrado sera de $20.000.000'
          });
        } else {
          swal({
            type: 'success',
            title: 'Valor Aprobado!',
            text: 'El valor aprobrado sera de $50.000.000'
          });
        }
      } else {
        swal({
          type: 'error',
          title: 'Oops!',
          text: 'El salario debe ser superior a $800.000'
        });
      }
     } else {
      swal({
        type: 'error',
        title: 'Oops!',
        text: 'El tiempo con la compañia debe ser minimo 1 año y medio'
      });
     }
  }
}
