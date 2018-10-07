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
    let identification;
    this.formSignIn = new FormGroup({
      'identification': new FormControl(identification)
    });
  }

  submitForm() {
    if (this.formSignIn.valid) {
      this.userService.checkUser(this.formSignIn.controls.identification.value).subscribe(
        (res: []) => {
          if (res.length) {
           this.router.navigate(['/credit']);
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

}
