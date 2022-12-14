import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent}from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {component:LoginComponent,path:"login"},
  {component:SignUpComponent,path:"signup"},
  {component:HomeComponent,path:"home"},
  {component:AddRoleComponent,path:"addrole"},
  {component:AddRoleComponent,path:"allroles"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
