import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formSignIn: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    let identification;
    this.formSignIn = new FormGroup({
      'identification': new FormControl(identification)
    });
  }

}
