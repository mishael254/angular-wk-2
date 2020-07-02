import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GUserService {
  apiUrl = 'https://api.github.com/users'
  constructor(private http:HttpClient) { }

  //first we get all users
  getUsers()  {
    return this.http.get (`${this.apiUrl}`)

  }


  //second we get user and their usernames

  getUser(username:string)  {

    return this.http.get (`${this.apiUrl}/${username}`)

  }
}
