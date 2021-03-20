import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { ManageDrawer } from 'src/app/shared/services/drawer.service';
import { AuthService } from 'src/app/auth/services/auth-service.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
declare var $: any;
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html'
})
export class AdminSidebarComponent implements OnInit {
  @Input()
  isDrawerClosed: boolean;

  paymentSubmenu = false;

  constructor(
    public manageDrawer: ManageDrawer,
    private router: Router,
    private auth: AuthService,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
      $('#menu_btn').click(function () {
        $('body').toggleClass('open_menu');
    });
    $('#sideMenuClose').click(function () {
      $('body').removeClass('open_menu');
  });
  $('#sidemenu li a ').click(function () {
    $('body').removeClass('open_menu');
  });
  }

  onLogout(): void {
    this.auth.logout().subscribe(
      (result: any) => {
        if (result.success === true) {
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
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

  subMenu() {
    this.paymentSubmenu = !this.paymentSubmenu;
  }

  handleToggle() {
    this.manageDrawer.drawerStatusSubject.next(
      this.manageDrawer.possibleStates.toggle
    );
  }

  onClick(objData: any) {
    this.router.navigate([objData]);
  }
}
