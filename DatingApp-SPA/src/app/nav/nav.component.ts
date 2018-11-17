import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
    .subscribe(
      next => {
        // console.log('Logged in successfully');
        this.alertify.success('Logged in successfully');

      },
      error => {
          // console.log('Failed to login:' + error);
          this.alertify.error('Failed to login:' + error);
      },
      () => {
        this.router.navigate(['/members']);
      }
      );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);

  }
}
