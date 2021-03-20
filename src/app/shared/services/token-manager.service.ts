import { Injectable, PLATFORM_ID, Inject, isDevMode } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { Router } from "@angular/router";
import { default_const } from "../constants/consts";

const dataName = default_const.currentUser;

@Injectable()
export class TokenManager {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  //#region data of current user
  fetchToken() {
    let token: any;
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem(dataName);
      if (!userData) {
        return "";
      }
      try {
        if (isDevMode() || !isDevMode()) {
          token = JSON.parse(userData)["token"];
        } else {
        }
      } catch (err) {
        this.deleteData();
        this.router.navigate(["/"]);
      }
    }
    return token;
  }

  deleteToken() {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
      localStorage.removeItem(dataName);
    }
  }

  fetchName() {
    let name: any;
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem(dataName);
      if (!userData) {
        return null;
      }
      try {
        if (isDevMode() || !isDevMode()) {
          name = JSON.parse(userData)["name"];
        }
      } catch (err) {
        this.deleteData();
        this.router.navigate(["/"]);
      }
    }
    return name;
  }

  fetchId() {
    let id: any;
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem(dataName);
      if (!userData) {
        return null;
      }
      try {
        if (isDevMode() || !isDevMode()) {
          id = JSON.parse(userData)["id"];
        } 
      } catch (err) {
        this.deleteData();
        this.router.navigate(["/"]);
      }
    }
    return id;
  }

  storeData(value: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (value) {
        if (isDevMode() || !isDevMode()) {
          localStorage.setItem(dataName, JSON.stringify(value));
        } 
      }
    }
  }

  deleteData() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(dataName);
    }
  }

  //#endregion

  fetchDataByKey(key: any) {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem(key);
      if (!userData) {
        return null;
      }
      try {
        if (isDevMode() || !isDevMode()) {
          return JSON.parse(userData);
        } 
      } catch (err) {
        this.deleteData();
        this.router.navigate(["/"]);
      }
    }
  }

  storeDataByKey(key: any, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (value) {
        if (isDevMode() || !isDevMode()) {
          localStorage.setItem(key, JSON.stringify(value));
        } 
      }
    }
  }

  deleteDataByKey(key) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
}
