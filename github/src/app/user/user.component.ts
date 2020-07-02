import { Component, OnInit } from '@angular/core';

import { User } from "../user-class/user";
import { LocalService } from '../local-service/local.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User

  constructor(private localservice:LocalService) {
    
   }

  ngOnInit(): void {
    this.localservice.userRequest()
    this.user = this.localservice.user
    
  
  }

}
