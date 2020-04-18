import { ITodo } from "../interfaces/itodo";
import { TodoService } from "../services/todo.service";

const TODOS: ITodo[] = TodoService.getTodos();

export { TODOS };
