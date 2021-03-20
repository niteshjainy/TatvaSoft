import { OnInit, OnDestroy } from "@angular/core";
import { Lightbox } from "angular2-lightbox";
import { ToasterService } from "../../shared/services/toaster.service";
import { TimeoutError, Subscription } from "rxjs";
import { ServiceBase } from "../../shared/baseClass/services-base.class";


export class ManageListBase implements OnInit, OnDestroy {
  hydrationUrl: string;

  dataList: Array<any>;

  dataListCount: number;

  page: number;

  loading: boolean;

  totalQueryableData: number;

  observableSubscriptions: Array<Subscription>;

  query: any;

  dataDetails: any;
  countDetails: any;

  constructor(private url: string, protected serviceBase: ServiceBase, protected toasterService: ToasterService) {
    this.hydrationUrl = url;
    this.page = 1;
    this.query = "";
    this.loading = false;
    this.dataList = [];
    this.dataDetails = {};
    this.dataListCount = 0;
    this.totalQueryableData = 0;
    this.observableSubscriptions = [];
  }

  ngOnInit() {
    if (this.hydrationUrl !== "") {
      this.getList(this.page);
    }
  }

  getList(page: number, queryObj?) {
    if (queryObj) {
      this.query = queryObj;
    }

    this.loading = true;
    const getListSubscription = this.serviceBase.getList(this.hydrationUrl, page, this.query).subscribe({
      next: (result: any) => {
        this.dataList = this.dataList.concat(result.data.rows); // for data listing array
 // for data details object

        this.totalQueryableData = result.data.total;
        if (result.data.countDetails) {
          this.countDetails = result.data.countDetails;
        }

        this.dataListCount = this.dataList.length;
        this.page = page;
        this.loading = false;
      },
      error: err => {
        if (err instanceof TimeoutError) {
          this.toasterService.Error("", "Timeout Error");
        }
        this.loading = false;
      }
    });
    this.observableSubscriptions.push(getListSubscription);
  }

  setStatus(status: string) {
    let state;
    switch (status) {
      case "active":
        state = true;
        break;

      case "inactive":
        state = false;
        break;

      default:
        state = false;
        break;
    }
    return state;
  }

  updateUsersStatus(url: string, id: number, status: string) {
    if (status === "inactive") {
      const data = !confirm("Are you sure you want to deactivate it");
      if (data) {
        return;
      }
    }

    const indexToBeChanged = this.dataList.findIndex(entity => entity.id === id);
    if (this.dataList[indexToBeChanged].status !== status) {
      this.serviceBase.updateStatus(url, status).subscribe(
        (result: any) => {
          if (result.success === true) {
            this.toasterService.Success(result.message);
            this.dataList[indexToBeChanged].user_profile.status = status;
            this.dataList = this.dataList.concat();
          } else {
            this.toasterService.Error();
          }
        },
        err => {
          if (err instanceof TimeoutError) {
            this.toasterService.Error("", "Timeout Error");
          }
        }
      );
    }
  }

  updateStatus(url: string, id: number, status: string) {
    // if (status === 'inactive') {
    //   const data = !confirm('Are you sure you want to deactivate it');
    //   if (data) {
    //     return;
    //   }
    // }

    const indexToBeChanged = this.dataList.findIndex(entity => entity.id === id);
    if (this.dataList[indexToBeChanged].status !== status) {
      this.serviceBase.updateStatus(url, status).subscribe(
        (result: any) => {
          if (result.success === true) {
            this.toasterService.Success(result.message);
            this.dataList[indexToBeChanged].status = status;
            this.dataList = this.dataList.concat();
          } else {
            if (result.message) {
              this.toasterService.Error(result.message);
            } else {
              this.toasterService.Error();
            }

          }
        },
        err => {
          if (err instanceof TimeoutError) {
            this.toasterService.Error("", "Timeout Error");
          }
        }
      );
    }
  }
  updateReviewStatus( id, type) {
 console.log(type);
    const indexToBeChanged = this.dataList.findIndex(entity => entity.id === id);
    if (this.dataList[indexToBeChanged].status) {
      this.serviceBase.getReviewRatingUpdateStatus( id, type).subscribe(
        (result: any) => {
          if (result.success === true) {
            this.toasterService.Success(result.message);
            this.dataList[indexToBeChanged].status = type;
            this.dataList = this.dataList.concat();
            console.log(" this.dataList", this.dataList)
          } else {
            if (result.message) {
              this.toasterService.Error(result.message);
            } else {
              this.toasterService.Error();
            }

          }
        },
        err => {
          if (err instanceof TimeoutError) {
            this.toasterService.Error("", "Timeout Error");
          }
        }
      );
    }
  }

  onScroll() {
    if (!this.loading && this.dataList.length < this.totalQueryableData) {
      this.getList(this.page + 10);
    }
  }

  // firstScroll() {
  //     if (this.page === 1 && !this.loading) {
  //       this.getList(this.page + 1);
  //     }
  // }

  deleteEntity(url, id) {
    // this.loading = true;
    this.serviceBase.deleteItem(url).subscribe({
      next: res => {
        this.loading = false;
        const list = this.dataList;
        const entityIndex = list.findIndex(entity => {
          if (entity.id === id) {
            return true;
          }
        });
        // removes index obtained above from list
        list.splice(entityIndex, 1);
        // enforce change detection
        this.dataList = list.concat();
        this.toasterService.Success("Deleted successfully");
      },
      error: err => {
        // this.toasterService.Error("Some error occurred while deleting");
        if (err.error) {
          if (err.error && err.error.error && err.error.error.length > 0) {
            this.toasterService.Error(err.error.error[0].message);
          } else {
            this.toasterService.Error(err.error.message);
          }
        } else {
          this.toasterService.Error(err.message);
          // this.toasterService.Error(notification_msg.SERVER_NOT_RESPONDING);
        }
      }
    });
  }

  search() {
    this.dataList = [];
    this.dataDetails = {};
    this.getList(1);
  }

  getSortAndSearchFormData(field_name: any, event: any, filterData) {
    let sortBy = "DESC";
    const spnael = event.currentTarget as HTMLSpanElement;

    const thParentCollection = spnael.parentElement.children as HTMLCollection;

    if (thParentCollection.length > 0) {
      // tslint:disable-next-line:forin
      for (const key in thParentCollection) {
        const th = thParentCollection[key];
        if (th.children && th.children.length > 0) {
          const span = thParentCollection[key].children[0] as HTMLSpanElement;
          if (span) {
            if (th["cellIndex"] !== spnael["cellIndex"]) {
              const caret_up1 = span.classList.contains("caret-up");
              if (caret_up1) {
                span.classList.remove("caret-up");
                span.classList.add("caret-down");
              }
            }
          }
        }
      }
    }

    const caret_up = spnael.children[0].classList.contains("caret-up");

    if (caret_up) {
      spnael.children[0].classList.remove("caret-up");
      spnael.children[0].classList.add("caret-down");
      sortBy = "DESC";
    } else {
      spnael.children[0].classList.add("caret-up");
      spnael.children[0].classList.remove("caret-down");
      sortBy = "ASC";
    }

    // filter Data and addition of sorting filters
    if (filterData) {
      filterData["field_name"] = field_name;
      filterData["sort"] = sortBy;
    }
    if (!this.loading) {
      this.dataList = [];
      this.getList(1, filterData);
      this.query = filterData;
    }
  }

  ngOnDestroy() {
    this.observableSubscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }
}
