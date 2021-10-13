import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  title: string = 'Login';
  ngOnInit(): void {}
  loginHandle(email: NgForm, pass: NgForm) {
    console.log(`Email: ${email}, Password: ${pass}`);
  }
}
