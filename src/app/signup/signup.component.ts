import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'app/shared/auth.service';

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
  isShown2: boolean = true;

  onSubmit(form: NgForm) {
    console.log(this.signupForm)
    this.firstName = this.signupForm.value.firstName;
    this.lastName = this.signupForm.value.lastName;
    this.signupEmail = this.signupForm.value.signupEmail;
    this.signupPassword = this.signupForm.value.signupPassword;
  }
  
  signUp(email: string, password: string){
    this.authService.signUp(email, password);
  }

  sendEmailVer() {
    this.isShown2 = false;
    this.authService.SendVerificationMail();
  }

  sendVerificationEmail(){
    this.authService.SendVerificationMail();
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
