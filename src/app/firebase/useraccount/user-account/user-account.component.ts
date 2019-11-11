import { Component, OnInit } from '@angular/core';
import { signUp } from './signUp';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  signinForm= true;
  signupForm= false;

  signup: FormGroup;

  signin: FormGroup;


  constructor(private userService: UserService) { 
  
  }

  ngOnInit() {
    // this.signinForm = this.userService.signinForm;
    // this.signupForm = this.userService.signupForm;
  this.signup = new FormGroup({
    signupmail: new FormControl(),
    signuppassword: new FormControl()
  })

  this.signin = new FormGroup({
    signinmail: new FormControl(),
    signinpassword: new FormControl()
  })

  }

  signupUser(){
    console.log(this.signup.value);
    const email = this.signup.value.signupmail;
    const password = this.signup.value.signuppassword;
    this.userService.signupUser(email, password);
    
    this.signinForm = true;
    this.signupForm = false;
    // this.signinForm = this.userService.signinForm;
    // this.signupForm = this.userService.signupForm;
    
  
  }

  signinUser(){
    console.log(this.signin.value);
    const email = this.signin.value.signinmail;
    const password = this.signin.value.signinpassword;
    this.userService.signinUser(email, password);
  }

}
