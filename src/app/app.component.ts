import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Car_Location_Project';
  constructor (public authService: AuthService,private router:Router) {}
  ngOnInit(): void {
    let isloggedin: string| null;
  let loggedUser:string| null;
  isloggedin = localStorage.getItem('isloggedIn');
  loggedUser = localStorage.getItem('loggedUser');


  }
  onLogout(){
    this.authService.logout();
  }
}
