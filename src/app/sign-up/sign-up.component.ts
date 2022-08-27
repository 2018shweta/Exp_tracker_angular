import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  firstName:string=""
  email="" //auto - string
  password:string=""

  constructor(private tsService:ToastrService,private router:Router,private sessionService:SessionService)
  {

  }

  printData()
  {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    //validation
    let user={
      "firstName":this.firstName,
      "email":this.email,
      "password":this.password,
      "gender":"male"
    }
    this.sessionService.signupApi(user).subscribe(res=>{
      if(res){
        this.tsService.success("signup done","",{timeOut:3000});
    this.router.navigateByUrl("/login");
      }
      
    })
    //db
    //response success
    
  }

}
