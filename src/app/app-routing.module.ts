import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminModule } from "./admin/admin.module";
import { AuthGuard } from "./auth/services/auth-guard.service";
import { NotFoundComponent } from "./shared/component/not-found/not-found.component";



const AppRoutes: Routes = [
  {
    path: "admin",
  //  loadChildren: "./app/admin/admin.module#AdminModule",
    // path: '',
      loadChildren: () => AdminModule ,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: "./auth/auth.module#AuthModule"
  },

  {
    path: "**",
    // component: NotFoundComponent,
    redirectTo: "/admin/dashboard"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, {
      enableTracing: false,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
