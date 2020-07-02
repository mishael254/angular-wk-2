import { Component, OnInit } from '@angular/core';
import { User } from "../user-class/user";
import { LocalService } from '../local-service/local.service'
import { GUserService } from '../github-user/g-user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User
  Gusers;
  profile = { login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: ''};
  repos: any[];
  username: string;


  constructor(private localservice:LocalService , private userservice:GUserService) { }

  ngOnInit(): void {
    this.localservice.userRequest()
    this.user = this.localservice.user
    // function from the guser service to get user
    this.userservice.getUsers()
    .subscribe(users => {
      console.log(users);
      this.Gusers = users
    })

  }

}
