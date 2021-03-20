import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthComponent } from './auth-comp/auth-comp.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth-service.service';
import { SharedModule } from './../shared/module/shared.module';

const routes: Routes = [
  { path: '', component: AuthComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);
