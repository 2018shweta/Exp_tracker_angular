import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email=""
password=""
  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
let user={
  "email":this.email,"password":this.password
}
this.sessionService.loginApi(user).subscribe(res=>{
  // console.log(res);
  // console.log(res.data.user.role.roleName)
  console.log(res)
  
  console.log(res.data.role.roleName)
this.toastr.success("login done")
if(res.data.role.roleName=="user"){
  console.log(res.data.role.roleName)
this.router.navigateByUrl("/dashborad")}
else if(res.data.role.roleName=="admin"){
  
  this.router.navigateByUrl("/home") 

}
},err=>{
this.toastr.error("please again try")
})
}
}
