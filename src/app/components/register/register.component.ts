import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    let identification;
    let name;
    let lastName;
    let birthDate;

    this.formRegister = new FormGroup({
      'identification': new FormControl(identification , [ Validators.required, Validators.min(10000000)]),
      'name': new FormControl(name, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'birthDate': new FormControl(birthDate, Validators.required)
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
  submitForm() {
    if (this.formRegister.valid) {
      this.userService.registerUser(this.formRegister.value).subscribe(
        (res: any) => {
          if (res.name === 'SequelizeUniqueConstraintError') {
            swal({
              type: 'error',
              title: 'Oops!',
              text: 'La identificación ya se encuentra registrada'
            });
          } else {
            swal({
              type: 'success',
              title: 'Guardado!',
              text: 'La información se ha guardado de forma exitosa'
            });
            this.router.navigate(['/']);
          }
        },
        err => {
         console.log('Error occured' + err);
        });
       } else {
      swal({
        type: 'error',
        title: 'Oops!',
        text: 'Revisa el formulario!'
      });
    }
  }
  // convenience getter for easy access to form fields
  get form() { return this.formRegister.controls; }
}
