import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
    .subscribe(
      next => {
        // console.log('Logged in successfully');
        this.alertify.success('Logged in successfully');

      }
      , error => {
          // console.log('Failed to login:' + error);
          this.alertify.error('Failed to login:' + error);
      });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
  }
}
