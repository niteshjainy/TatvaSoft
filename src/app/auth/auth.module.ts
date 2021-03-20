
import { AuthComponent } from './auth-comp/auth-comp.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth-service.service';
import { AuthRoutes } from './auth-routing.module';


@NgModule({
  imports: [
    RouterModule,
    AuthRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    HttpModule
  ],
  exports: [RouterModule],
  declarations: [AuthComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
