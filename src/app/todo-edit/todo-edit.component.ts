import { Component, OnInit, Input } from "@angular/core";
import {
  NgbModalRef,
  NgbActiveModal,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ITodo } from "../interfaces/itodo";
@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
