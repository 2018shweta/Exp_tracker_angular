import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  firstName:string=""
  email="" //auto - string
  password:string=""

  printData()
  {
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
  }

}
