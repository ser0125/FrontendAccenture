import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formSignIn: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.formSignIn = new FormGroup({
      'identification': new FormControl()
    });
  }

  submitForm() {
    if (this.formSignIn.valid) {
      this.userService.checkUser(this.formSignIn.controls.identification.value).subscribe(
        (res: any) => {
          if (res.length) {
           this.router.navigate(['/credito']);
          } else {
            swal({
              type: 'error',
              title: 'Oops!',
              text: 'Identificación no registrada!'
              });
            }
        }
      );
    }
  }
  // convenience getter for easy access to form fields
  get form() { return this.formSignIn.controls; }
}
