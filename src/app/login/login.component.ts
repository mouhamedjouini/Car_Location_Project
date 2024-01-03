import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user = new User();
  err:number=0.

  constructor(private authService : AuthService,
    private router: Router) { }
  ngOnInit(): void {
   
  }
  onLoggedin()
  {
    this.authService.login(this.user).subscribe({
      next: (data) => {
      let jwToken = data.headers.get('Authorization')!;
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
      },
      error: (err: any) => {
      this.err = 1;
      }
      });
    }      
    
}
