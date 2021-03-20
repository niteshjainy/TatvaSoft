import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {
  Router,
  NavigationStart,
  Event as NavigationEvent
} from "@angular/router";

@Injectable()
export class ManageDrawer {
  drawerState: string;
  public headerHeading: string;
  drawerStatusSubject: Subject<any>;

  readonly possibleStates = {
    closed: "closed",
    open: "open",
    toggle: "toggle"
  };

  body: HTMLBodyElement;

  constructor(private router: Router) {
    this.headerHeading = "DASHBOARD";
    this.body = document.getElementsByTagName("body")[0];
    this.drawerStatusSubject = new Subject();
    this.drawerStatusSubject.subscribe({
      next: newState => {
        if (this.sanitizeState(newState)) {
          if (newState !== this.drawerState) {
            this.handleStateChange(newState);
          }
        }
      },
      error: err => console.log(err)
    });
    if (window.screen.width < 1199) {
      this.closeNavBar();
    } else {
      this.drawerState = this.possibleStates.open;
      this.initDrawer();
    }

    this.handleSidebarOnNav();
  }

  handleSidebarOnNav() {
    this.router.events.forEach((event: NavigationEvent) => {
      if (window.screen.width < 1199) {
        if (event instanceof NavigationStart) {
          this.closeNavBar();
        }
      }
    });
  }

  closeNavBar() {
    this.drawerState = this.possibleStates.closed;
    this.handleStateChange(this.possibleStates.closed);
  }

  /** @description This utility method checks if the state being passed matches the state of the drawer
   * @param state state to be sanitized
   * @returns true if state matches to drawer possible states */
  sanitizeState(state: string): boolean {
    for (const key in this.possibleStates) {
      if (state === this.possibleStates[key]) {
        return true;
      }
    }

    return false;
  }

  initDrawer() {
    this.body.classList.remove("menu-toggle");
  }

  handleStateChange(state) {
    switch (state) {
      case this.possibleStates.closed:
        this.body.classList.add("menu-toggle");
        break;

      case this.possibleStates.open:
        this.body.classList.remove("menu-toggle");
        break;

      case this.possibleStates.toggle:
        this.handleToggle();
        return null;

      default:
        return null;
    }

    this.drawerState = state;
    this.drawerStatusSubject.next(state);
  }

  handleToggle() {
    switch (this.drawerState) {
      case this.possibleStates.open:
        this.drawerStatusSubject.next(this.possibleStates.closed);
        break;

      case this.possibleStates.closed:
        this.drawerStatusSubject.next(this.possibleStates.open);
        break;

      default:
        return null;
    }
  }
}
