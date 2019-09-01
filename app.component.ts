import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm', {static:false}) signup: NgForm;
  defaultSubscription= "Advanced";
  user= {
    email: '',
    password: '',
    subscription: ''
  };
  

  submitted = false;

  onSubmit() {
    this.submitted=true;
    this.user.email = this.signup.value.subscriptionData.email;
    this.user.password = this.signup.value.subscriptionData.password;
    this.user.subscription=this.signup.value.subscriptionData.subscription;
    this.signup.reset();
  }
}
