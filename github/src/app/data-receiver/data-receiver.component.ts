import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserClass } from "../user/user-class";
import { GithubRepo } from "../repository/github-repo";

@Component({
  selector: 'app-data-receiver',
  templateUrl: './data-receiver.component.html',
  styleUrls: ['./data-receiver.component.css']
})
export class DataReceiverComponent implements OnInit {
  
  userclass:UserClass
  githubrepo:GithubRepo


  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      login:string
      repos_url:string
    }
    this.http.get<ApiResponse>("https://api.github.com/users").subscribe(data =>{
    this.userclass = new UserClass(data.login,)
    }),
    this.http.get<ApiResponse>("https://api.github.com/users").subscribe(data =>{
    this.githubrepo = new GithubRepo(data.repos_url)
    })

  }

}
