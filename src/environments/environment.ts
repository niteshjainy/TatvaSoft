// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};


let base_url = "";

base_url = "http://localhost:3700/api";


class Endpoints {
  AUTH_BASE = base_url + "/auth";
  DASHBOARD_BASE = base_url + "/admin/dashboard";

  USER_ENDPOINTS = {
    GET_USER_LIST: base_url + "/user",
    GET_USER_DETAIL: (id: any) => this.joinPaths(base_url + "/user", id),
    POST_USER: this.joinPaths(base_url + "/user"),
    UPLOAD_PROFILE_IMAGE_USER: (id: any) =>
      this.joinPaths(base_url + "/user", id, "upload-profile-image"),
    UPDATE_USER: (id: any) => this.joinPaths(base_url + "/user", id),
    USER_STATUS_UPDATE_URL: (id: any) =>
      this.joinPaths(base_url + "/user", id, "change-status"),
    GET_STATE_LIST: (id: any) => this.joinPaths(base_url + "/state", id),
    GET_COUNTRY_LIST: base_url + "/country"
  };
  DASHBOARD_ENDPOINTS = {
    GET_HEADER_DETAILS: this.DASHBOARD_BASE,
    GET_DASHBOARD_DETAIL: this.DASHBOARD_BASE,
    GET_INCOME_DISTRIBUTION: this.joinPaths(
      this.DASHBOARD_BASE,
      "income-distribution"
    ),
    GET_USER_GRAPH: this.joinPaths(this.DASHBOARD_BASE, "user-graph"),
    GET_DASHBOARD_CHART: this.joinPaths(base_url, "dashboard-chart"),
    GET_DASHBOARD_MEMBERSHIP_PLAN_SUMMARY: this.joinPaths(
      base_url,
      "membership-plan-summary"
    )
  };

  AUTH_ENDPOINTS = {
    LOG_IN: this.joinPaths(this.AUTH_BASE, "login"),
    LOGOUT: this.joinPaths(this.AUTH_BASE, "logout")
  };






  private joinPaths(...params: string[]) {
    const newUrl = params.join("/");
    return newUrl;
  }

  private joinPathsWithQueryParams(...params: any[]) {
    const newUrl = params.join("?");
    return newUrl;
  }
}

export const API = new Endpoints();
