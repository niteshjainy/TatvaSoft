import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "src/app/shared/component/not-found/not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { AuthModule } from "./auth/auth.module";
import { ApiHandler } from "src/app/shared/services/api-handler.service";
// import { TokenManager } from 'src/app/shared/token-manager.service';
import { ManageDrawer } from "src/app/shared/services/drawer.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TokenInterceptor } from "src/app/app.interceptor";
import { TokenManager } from "src/app/shared/services/token-manager.service";
import { SharedModule } from "src/app/shared/module/shared.module";
import { AuthService } from "src/app/auth/services/auth-service.service";
import { AuthGuard } from "src/app/auth/services/auth-guard.service";
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    NgbModule,
    ToastrModule.forRoot({
      preventDuplicates: true,

    }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ApiHandler,
    TokenManager,
    ManageDrawer,
    ToasterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
