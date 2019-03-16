import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './angular-project/component/home/home.component';
import { LoginComponent } from './angular-project/component/login/login.component';
import { ListUserComponent } from './angular-project/component/list-user/list-user.component';
import { AddUserComponent } from './angular-project/component/add-user/add-user.component';
import { EditUserComponent } from './angular-project/component/edit-user/edit-user.component';


const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "list-user", component: ListUserComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "edit-user", component: EditUserComponent }
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
