import { Component, OnInit } from '@angular/core';
import { User } from "../user-class/user";
import { LocalService } from '../local-service/local.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User
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


  constructor(private localservice:LocalService) { }

  ngOnInit(): void {
    this.localservice.userRequest()
    this.user = this.localservice.user

  }

}
