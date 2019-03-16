import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = "http://localhost:3000/user"

  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.baseurl);
  }
  //delete user by id
  deleteUser(id:number){
    return this.http.delete(this.baseurl + "/" +id) 
  }
  createUser(user:User){
    return this.http.post(this.baseurl,user);
  }
  // Get users by id
  getusersById(id :number){
    return this.http.get<User>(this.baseurl+"/" +id)
  }
  editUser(user:User){
    return  this.http.put<User>(this.baseurl+"/" +user.id, user);
  }
}



