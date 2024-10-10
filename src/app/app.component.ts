import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logout() {
    localStorage.removeItem('currentUser');
  }
  constructor(private router: Router) {}

  gotoContact() {
    this.router.navigate(['contact']);
  }
}
