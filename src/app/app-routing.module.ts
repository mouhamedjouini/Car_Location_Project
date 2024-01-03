import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MarquesComponent } from './marques/marques.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';


const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path: "marques", component : MarquesComponent},
    {path: "add-voiture", component : AddVoitureComponent},
    {path: "updateVoiture/:id", component: UpdateVoitureComponent},
    {path: 'login', component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
    {path:'register',component:RegisterComponent},
    { path: 'verifEmail', component: VerifEmailComponent }, 
    { path: '', redirectTo: 'voitures', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
