import { Component, OnInit } from "@angular/core";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ITodo } from "../interfaces/itodo";
import { TextFieldModule } from "@angular/cdk/text-field";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  modalInstance: NgbModalRef;
  todo: ITodo;
  newDescription: string;

  edit(): void {
    let modal = this.modalInstance.close(this.newDescription);
  }

  // cancel() {
  //   this.modalInstance.close(this.todo.description);
  // }

  constructor() {}

  ngOnInit() {}
}
