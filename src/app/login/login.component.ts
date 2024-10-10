import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  validUser: any = { username: 'admin@o2.com', pass: 'admin123' };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}
  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.router.navigate(['first']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  checkLogin() {
    const { email, password } = this.loginForm.value;
    if (email === this.validUser.username && password === this.validUser.pass) {
      localStorage.setItem('currentUser', JSON.stringify({ username: email }));
      this.router.navigate(['first']);
    } else {
      this.errorMessage = 'Invalid username/password, please try again';
    }
  }
}
