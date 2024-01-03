import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrl: './verif-email.component.css'
})
export class VerifEmailComponent implements OnInit{
  code:string="";
  user:User=new User();
  err="";
  constructor(private route:ActivatedRoute,private authService:AuthService,
  private router:Router
  ) {}
  ngOnInit(): void {
  this.user =this.authService.regitredUser;
  console.log(this.user);
  
  }
  onValidateEmail(){
  this.authService.validateEmail(this.code).subscribe({
  next : (res)=> {
  alert('Login successful');
  console.log(this.user.email);
  
  this.authService.login(this.user).subscribe({
  next: (data) => {
  let jwToken = data.headers.get('Authorization')!;
  console.log(jwToken);
  this.authService.saveToken(jwToken);
  this.router.navigate(['/']);
  },
  error: (err: any) => {
  console.log(err);
  console.log("err");
  
  }
  });
  },
  error: (err: any) => {
  if(err.status=400){
  this.err= err.error.message;
  }
  console.log(err.errorCode);
  }});
  }
  }
