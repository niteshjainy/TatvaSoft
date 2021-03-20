import { Component, OnInit, Input } from "@angular/core";
import { ManageDrawer } from "src/app/shared/services/drawer.service";
import { Router } from "@angular/router";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { default_const, error_msg } from "src/app/shared/constants/consts";
import { TokenManager } from "src/app/shared/services/token-manager.service";
import { AuthService } from "src/app/auth/services/auth-service.service";
@Component({
  selector: "app-admin-header",
  templateUrl: "./admin-header.component.html",
  providers: [ TokenManager]
})
export class AdminHeaderComponent implements OnInit {
  userName: any;
  userImage: any;

  constructor(
    public manageDrawer: ManageDrawer,
    private router: Router,
    private auth: AuthService,
    private toasterService: ToasterService,
    private manageToken: TokenManager
  ) {
 
  }

  ngOnInit() {
    this.getUserDetails();
  }

  handleToggle() {
    this.manageDrawer.drawerStatusSubject.next(
      this.manageDrawer.possibleStates.toggle
    );
  }

  onLogout(): void {
    this.auth.logout().subscribe(
      (result: any) => {

        if (result.success === true) {
          localStorage.removeItem("currentUser");
          this.router.navigate(["/login"]);
          this.toasterService.Success(result.message);
        } else {
          this.toasterService.Error(result.message);
        }
      },
      err => {
        this.toasterService.ErrorTimeOut(err.message);
      }
    );
  }

  getUserDetails() {
    this.userName = "Test";
    const userData = localStorage.getItem("currentUser");
    let name: any;
    if (userData) {
      this.userImage = JSON.parse(userData).profile_image;
      // data['photo'] = JSON.parse(userData).photo;
    }

    this.userName = "Test";
  }

}
