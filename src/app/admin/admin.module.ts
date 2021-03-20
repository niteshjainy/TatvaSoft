
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from "./admin.component";
import {Routes, RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { SharedModule } from "src/app/shared/module/shared.module";




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    
  ],
  declarations: [
    AdminComponent,
  ]

})
export class AdminModule { }
