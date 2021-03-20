import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "src/app/shared/module/shared.module";

const route: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: DashboardComponent },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(route), SharedModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
