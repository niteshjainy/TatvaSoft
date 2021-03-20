import { AdminComponent } from "./admin.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "./dashboard/dashboard.module";
import { UserModule } from "../manage-users/manage-users.module";


const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => DashboardModule ,
     
      },
      {
        path: "blog",
        loadChildren: () => UserModule ,
     
      },
      

    
    ]
  }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
