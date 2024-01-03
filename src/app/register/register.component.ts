import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User.model';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public user = new User();
  confirmPassword?:string;
  myForm!: FormGroup;
  err: any;
  constructor(private formBuilder: FormBuilder, private authSerice:AuthService,private router:Router) { }
  ngOnInit(): void {
  this.myForm = this.formBuilder.group({
  username : ['', [Validators.required]],
  email : ['', [Validators.required, Validators.email]],
  password : ['', [Validators.required, Validators.minLength(6)]],
  confirmPassword : ['', [Validators.required]]
  } );
  }
  onRegister()
{
  this.authSerice.registerUser(this.user).subscribe({
    next:(res)=>{
      this.authSerice.setRegistredUser(this.user);
    alert("veillez confirmer votre email");
     this.router.navigate(["/verifEmail"]);
    },
    error:(err:any)=>{
    if(err.status=400){
    this.err= err.error.message;
    }
    }
    }
    )
    }
}