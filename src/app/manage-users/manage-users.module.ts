
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ManageUserComponent } from "./manage-users.component";
import {Routes, RouterModule } from "@angular/router";
import { ManageUserRoutingModule } from "./manage-users-routing.module";
import { SharedModule } from "src/app/shared/module/shared.module";




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ManageUserRoutingModule,
  ],
  declarations: [
    ManageUserComponent,
  ]

})
export class UserModule { }
