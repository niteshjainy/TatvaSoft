
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageUserComponent } from "./manage-users.component";
import { UserModule } from "./manage-users.module";



const routes: Routes = [
  {
    path: "",
    component: ManageUserComponent,
   
  },
  {
    path: "list",
    component: ManageUserComponent,
   
  }
];

export const ManageUserRoutingModule = RouterModule.forChild(routes);
