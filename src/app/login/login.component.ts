import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('myForm2')
  loginForm!: NgForm;
  logEmail = "";
  logPassword = ""

  onSubmit(form: NgForm) {
    console.log(this.loginForm)
    this.logEmail = this.loginForm.value.logEmail;
    this.logPassword = this.loginForm.value.logPassword;
    
  }

  constructor() { }

  ngOnInit() {
  }

}

