import { LoaderComponent } from "./../component/loader/loader.component";
import { PaginationComponent } from "./../component/pagination/pagination.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NoDataComponent } from "src/app/shared/component/no-data/no-data.component";
import { DataLoaderComponent } from "src/app/shared/component/loader/data.loader.component";
import { AdminSidebarComponent } from "src/app/shared/component/admin/admin-sidebar/admin-sidebar.component";
import { AdminHeaderComponent } from "src/app/shared/component/admin/admin-header/admin-header.component";
import { RouterModule } from "@angular/router";
import { ConfirmationBoxComponent } from "src/app/shared/component/confirmation-box/confirmation-box.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    PaginationComponent,
    LoaderComponent,
    NoDataComponent,
    DataLoaderComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    ConfirmationBoxComponent,
  
  ],
  exports: [
    PaginationComponent,
    LoaderComponent,
    NoDataComponent,
    DataLoaderComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    ConfirmationBoxComponent,
  ],
  providers: []
})
export class SharedModule {}
