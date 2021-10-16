import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  title: string = 'Login';
  ngOnInit(): void {}
  loginHandle(email, pass) {
    alert(`Email: ${email}, Password: ${pass}`);
  }
}
