import { Component, OnInit, OnChanges, Input,
          SimpleChanges, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pagination-comp',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit, OnChanges {

  /**Total number of entries as returned by api */
  @Input() totalEntries: number;

  /**Entries we wanna display per page, similar to offset */
  @Input() entriesPerPage: number;

  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  /**Total number of pages (determined by us, based on totalEntries/entriesPerPage */
  totalPages: number;

  /**Array that contains our page indexes - all of the pages. Ex: [1,2,3,4,5,6,7,8,9,10]*/
  private totalPagesArray: Array<number>;

  /**Array that windows totalPagesArray and show only limited pages. Ex: [3,4,5,6,7] */
  pagesArrayOnDisplay: Array<number>;

  /**This is the number of pages that we wanna show on our screen at a time */
  @Input() showTheseManyPages: number;

  /**Lowest index of the window i.e. pagesArrayOnDisplay */
  private currentStartPageIndex: number;

  /**Highest index of the window i.e. pagesArrayOnDisplay  */
  private currentStopPageIndex: number;

  private currentSelectedPage = 1;

  constructor() {
    // Static entries
    this.totalEntries = 70;
    this.entriesPerPage = 10;
    this.showTheseManyPages = 5;
    this.pagesArrayOnDisplay = [];
    this.initializePages();
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalEntries = getCurrentValueOrPrevious('totalEntries') || this.totalEntries;
    this.entriesPerPage = getCurrentValueOrPrevious('entriesPerPage') || this.entriesPerPage;
    this.showTheseManyPages = getCurrentValueOrPrevious('showTheseManyPages') || this.showTheseManyPages;
    this.initializePages();

    function getCurrentValueOrPrevious (objectKey: string) {
      try {
        const change = changes[objectKey].currentValue;
        return change;
      } catch (e) {
        try {
          const change = changes[objectKey].previousValue;
          return change;
        } catch (error) {
          return null;
        }
      }
    }
  }

  initializePages() {
    this.totalPages = Math.ceil(this.totalEntries / this.entriesPerPage) ;
    this.totalPagesArray = [];
    for (let i = 1; i <= this.totalPages; i++) {
      this.totalPagesArray.push(i);
    }
    this.currentStartPageIndex = 1;
    this.currentStopPageIndex = this.totalPages < this.showTheseManyPages ? this.totalPages : this.showTheseManyPages;
    this.enforcePageChanges();
  }


  /**Handles page change event but don't mutate the pagesArrayOnDisplay directly, that's done by enforcePageChanges*/
  AffectPagesArray(navigate?: string) {
    switch (navigate) {
      case 'next':
        {
          this.incrementPagesIndex();
          break;
        }

      case 'back':
      {
        this.decrementPagesIndex();
        break;
      }

      default:
        break;
    }

    this.enforcePageChanges();
  }

  /**Helper function of AffectPagesArray which mutates pagesArrayOnDisplay*/
  enforcePageChanges() {
    this.pagesArrayOnDisplay = [];
    for (let i = this.currentStartPageIndex; i <= this.currentStopPageIndex; i++) {
      this.pagesArrayOnDisplay.push(i);
    }
  }

  /**Sanatize page changing and increment pages if feasible */
  incrementPagesIndex() {
    const nextStart = this.currentStartPageIndex + 1;
    const nextStop = this.currentStopPageIndex + 1;
    if (nextStop > this.totalPages) {
      return false;
    }
    this.currentStartPageIndex = nextStart;
    this.currentStopPageIndex = nextStop;
    this.emitPageChange(this.currentStopPageIndex);
    return true;
  }

  /**Sanatize page changing and decrement pages if feasible */
  decrementPagesIndex() {
    const nextStart = this.currentStartPageIndex - 1;
    const nextStop = this.currentStopPageIndex - 1;
    if (nextStart < 1) {
      return false;
    }
    this.currentStartPageIndex = nextStart;
    this.currentStopPageIndex = nextStop;
    this.emitPageChange(this.currentStartPageIndex);
    return true;
  }

  emitPageChange(pageNumber: number) {
    this.currentSelectedPage = pageNumber;
    this.changePage.emit(pageNumber);
  }

  selectNextPage() {
    if (this.currentSelectedPage < this.totalPagesArray.length) {
      this.currentSelectedPage += 1;
      this.emitPageChange(this.currentSelectedPage);
    }
  }

  selectPreviousPage() {
    if (this.currentSelectedPage > 1) {
      this.currentSelectedPage -= 1;
      this.emitPageChange(this.currentSelectedPage);
    }
  }

}
