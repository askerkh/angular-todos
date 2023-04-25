import { Component, inject } from "@angular/core"
import { TodosService } from "src/app/services/todos.service"

@Component({
  selector: "app-todos-main",
  templateUrl: "./main.component.html",
  styles: [],
})
export class MainComponent {
  todosService = inject(TodosService)
  filter = "all"
}
