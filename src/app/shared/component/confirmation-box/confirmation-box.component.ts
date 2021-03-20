import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-confirmation-box",
  templateUrl: "./confirmation-box.component.html"
})
export class ConfirmationBoxComponent implements OnInit {
  @Input() BodyMessage = "Are you sure you want to delete ?";
  @Input() BtnCancel = "CANCEL";
  @Input() BtnConfirm = "Delete";
  @Output() btnclick: EventEmitter<any>;
  constructor() {
    this.btnclick = new EventEmitter();
  }

  ngOnInit() {}

  onConfirmClick() {
    this.btnclick.emit(true);
  }

  onCancelClick() {
    this.btnclick.emit(false);
  }
}
