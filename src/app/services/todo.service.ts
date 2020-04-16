import { Injectable } from "@angular/core";
import { ITodo } from "../interfaces/itodo";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  todoId: number = 0;
  statuses: [string, string, string] = ["Todo", "Doing", "Done"];
  todoList: ITodo[] = [
    // example of how to make an item in todo list
    {
      title: "Install Angular CLI",
      id: this.todoId,
      status: "Todo",
      createdAt: new Date(),
    },
  ];
  constructor() {}
  getTodos(status) {
    if (status === "Todo") {
      return this.todoList.filter(status);
    } else if (status === "Doing") {
      return this.todoList.filter(status);
    } else if (status === "Done") {
      return this.todoList.filter(status);
    } else {
      return this.todoList;
    }
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo): void {
    todo.id = this.todoId++;
    this.todoList.push(todo);
  }
  getStatuses() {
    return this.statuses;
  }
}
