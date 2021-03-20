import { Injectable } from "@angular/core";
import { API } from "environments/environment";
import { ApiHandler } from "src/app/shared/services/api-handler.service";
import { ServiceBase } from "src/app/shared/baseClass/services-base.class";

@Injectable({
  providedIn: "root"
})
export class DashboardService extends ServiceBase {
  apiHandler: any;

  constructor(apiHandler: ApiHandler) {
    super(apiHandler);
  }

  getDashboardDetail() {
    const url = API.DASHBOARD_ENDPOINTS.GET_DASHBOARD_DETAIL;
    return this.apiHandler.apiGet(url);
  }
  getDashboardChartDetail() {
    const url = API.DASHBOARD_ENDPOINTS.GET_DASHBOARD_CHART;
    return this.apiHandler.apiGet(url);
  }
  getMembershipPlanSummary() {
    const url = API.DASHBOARD_ENDPOINTS.GET_DASHBOARD_MEMBERSHIP_PLAN_SUMMARY;
    return this.apiHandler.apiGet(url);
  }
}
