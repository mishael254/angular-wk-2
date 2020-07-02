import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { User } from "../user-class/user";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  user : User
  constructor (private http:HttpClient) {
    this.user = new User ("")
  }
  userRequest() {
    interface ApiResponse{
      login:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>( '' ).toPromise().then(response=>{
        this.user.login = response.login
        

        resolve()
      },
      error=>{
        this.user.login = "404 error.."
        

        reject(error)
      })
    })
    return promise
  }
  
  
}
