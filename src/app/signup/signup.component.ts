import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('myForm3')
  signupForm!: NgForm;
  firstName = "";
  lastName = "";
  signupEmail = "";
  signupPassword = "";

  onSubmit(form: NgForm) {
    console.log(this.signupForm)
    this.firstName = this.signupForm.value.firstName;
    this.lastName = this.signupForm.value.lastName;
    this.signupEmail = this.signupForm.value.signupEmail;
    this.signupPassword = this.signupForm.value.signupPassword;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}