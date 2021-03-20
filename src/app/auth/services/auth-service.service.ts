
import {map} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { ApiHandler } from 'src/app/shared/services/api-handler.service';
import { TokenManager } from 'src/app/shared/services/token-manager.service';
import { API } from "src/environments/environment";

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(
    private apiHandler: ApiHandler,
    private manageToken: TokenManager
  ) {}

  isLoggedIn() {
    // TODO: need to add logic to invalidate token
    if (this.manageToken.fetchToken()) {
      return true;
    }
  }

  loginUser(userName: string, password: string): Observable<any> {
    // Frame JSON body
    const loginReqBody = {
      email: userName,
      password: password,
      device_type: "web",
      device_id: "",
      environment: "dev"
    };

    return this.apiHandler
      .apiPost(API.AUTH_ENDPOINTS.LOG_IN, loginReqBody).pipe(
      map((response: any) => {
        const data = response.data;
      console.log('data', data);
        const token = data.user_token.access_token;
        if (token) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              user_type: data.user_type,
              token: token,
              name: data.name?data.name:'Hello',
              id: data.id
              // photo: data.photo
            })
          );
        }
        return response;
      }));
  }




  logout() {
    const logoutReqBody = {access_token : this.manageToken.fetchToken()};
    return this.apiHandler.apiPost(API.AUTH_ENDPOINTS.LOGOUT, logoutReqBody);
  }
}
