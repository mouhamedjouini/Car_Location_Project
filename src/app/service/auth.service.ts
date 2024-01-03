import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string='http://localhost:8082';
  token!:string;
  
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];
constructor(private router: Router,
  private http : HttpClient) { }
  public regitredUser : User = new User();
setRegistredUser(user : User){
this.regitredUser=user;
}
getRegistredUser(){
return this.regitredUser;
}
validateEmail(code : string){
  return this.http.get<User>(this.apiURL+'/verifyEmail/'+code);
  }
  
  login(user : User)
  {
  return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
  saveToken(jwt:string){
   localStorage.setItem('jwt',jwt);
   console.log(jwt)
   this.token = jwt;
   this.isloggedIn = true;
   }
   loadToken() {
   this.token = JSON.parse(localStorage.getItem('user') as any);;
    }
    getToken():string {
    return this.token;
    }
logout() {
this.isloggedIn= false;
this.loggedUser = undefined!;
this.roles = undefined!;
localStorage.removeItem('loggedUser');
localStorage.setItem('isloggedIn',String(this.isloggedIn));
this.router.navigate(['/login']);
}

isAdmin():Boolean{
if (!this.roles) //this.roles== undefiened
return false;
return (this.roles.indexOf('ADMIN') >-1);
}
setLoggedUserFromLocalStorage(login : string) {
  this.loggedUser = login;
  this.isloggedIn = true;
  localStorage.removeItem('jwt');
 // this.getUserRoles(login);
  }
  registerUser(user :User){
    return this.http.post<User>(this.apiURL+'/register', user,
    {observe:'response'});
    }
}
