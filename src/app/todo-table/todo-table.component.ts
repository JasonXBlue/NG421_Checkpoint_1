import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TodoService } from "../services/todo.service";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-todo-table",
  templateUrl: "./todo-table.component.html",
  styleUrls: ["./todo-table.component.css"],
})
export class TodoTableComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "title",
    "status",
    "description",
    "createdAt",
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.todoService.getTodos());
    this.dataSource.sort = this.sort;
  }
  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLocaleLowerCase();
  }
}
