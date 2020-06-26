import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  apiUrl = 'https://api.github.com/users'

  constructor(private http:HttpClient) { }

  getUsers()  {
    return this.http.get(`${this.apiUrl}`)
   

  }


  getUser(username:string) {

   return this.http.get(`${this.apiUrl}/ ${username}`)
    
  }
}
