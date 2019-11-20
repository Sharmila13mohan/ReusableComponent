import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  register: boolean;
  login: boolean;
  constructor() { }

  ngOnInit() {
    this.register = false;
    this.login = true;
  }
  createAccount(data) {
    this.register = false;
    this.login = true;
    if (data === 'loginclk') {
      this.register = true;
      this.login = false;
    }
  }
  createLoginClick(data) {
    alert(data);
  }
}
