import { Pipe, PipeTransform } from "@angular/core"
import { ITodo } from "../services/todos.service"

@Pipe({
  name: "todosFilter",
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: ITodo[], filter: string): ITodo[] {
    switch (filter) {
      case "all":
        return todos
      case "completed":
        return todos.filter((t) => t.completed)
      case "active":
        return todos.filter((t) => !t.completed)

      default:
        return todos
    }
  }
}
