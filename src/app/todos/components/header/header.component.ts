import { Component, inject } from "@angular/core"
import { TodosService } from "src/app/services/todos.service"

@Component({
  selector: "app-todos-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  todosService = inject(TodosService)
  inputText = ""

  addTodo() {
    this.todosService.addTodo(this.inputText)
    this.inputText = ""
  }
}
