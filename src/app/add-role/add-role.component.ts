import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
roleName=""
addRole(){
  let role={"roleName":this.roleName}
  console.log(role)
  this.userService.addRole(role).subscribe(res=>{
    console.log(res);
  })
}

}
