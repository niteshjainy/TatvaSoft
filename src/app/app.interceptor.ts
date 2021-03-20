
import { empty as observableEmpty, Observable, TimeoutError, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable, isDevMode } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";
import { TokenManager } from "../app/shared/services/token-manager.service";
import { ToasterService } from "../app/shared/services/toaster.service";
import { notification_msg, default_const } from "../app/shared/constants/consts";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private tokenManager: TokenManager,
    private toaster: ToasterService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let lang = this.tokenManager.fetchDataByKey("selectedLanguage");
    let selectedLanguage = lang != null ? lang.toLowerCase() : default_const.Default_Language["key"].toLowerCase();

    let newReq: HttpRequest<any>;
    let head: any = {
      access_token: this.tokenManager.fetchToken(),
      language: selectedLanguage
    };
    if (!isDevMode()) {
      head = Object.assign(
        {},
        {
          "access-token": this.tokenManager.fetchToken(),
          language: selectedLanguage
        }
      );
    }
    newReq = request.clone({
      setHeaders: head
    });

    return next.handle(newReq).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        this.toaster.Error("Please login again", "Session Expired");
        this.tokenManager.deleteToken();
        this.router.navigate(["/login"]);
        return observableEmpty();
      }
      return throwError(err);
    }));
  }
}
