import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-data-loader',
  template: `<div *ngIf="loading" class="text-center"><i class="fa fa-spinner fa-spin fa-2x fa-fw"></i></div>`
})
export class DataLoaderComponent implements OnInit {

  @Input() loading = false;
  
  constructor() {}

  ngOnInit() {}
}
