import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { User } from "../../model/user";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  users: User[];

  constructor(private userservice: UserService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("username") != null) {
      this.userservice.getUser().subscribe(data => {
        this.users = data;
      });
    } else {
      this.router.navigate(["/login"]);
    }
  }

  //logOff user

  logOutUser():void{
    if(localStorage.getItem("username")!=null)
    {
      localStorage.removeItem("username");
      this.router.navigate(['/login']);
    }
  }

  //edit user
  editUser(user:User):void{
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(["edit-user"]);

  }
  deleteUser(user: User): void {
    let result = confirm("do you want to delete?");
    if (result) {
      this.userservice.deleteUser(user.id).subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      });
    }
  }

  addUser(): void {
    this.router.navigate(["add-user"]);
  }
}
