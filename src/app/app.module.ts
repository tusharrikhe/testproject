import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./angular-project/component/home/home.component";
import { LoginComponent } from "./angular-project/component/login/login.component";
import { ListUserComponent } from "./angular-project/component/list-user/list-user.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from "./angular-project/component/add-user/add-user.component";
import { EditUserComponent } from "./angular-project/component/edit-user/edit-user.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
