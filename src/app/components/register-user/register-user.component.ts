import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {UserService} from '../../shared_service/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
   private user:User;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    this.user=new User()
  }

  processRegister()
  {
    
       this._userService.addUser(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },(error)=>{
         console.log(error);
      });
   
  }
 

}
