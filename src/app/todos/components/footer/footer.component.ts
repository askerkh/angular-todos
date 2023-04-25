import { Component, EventEmitter, inject, Input, Output } from "@angular/core"
import { TodosService } from "src/app/services/todos.service"

@Component({
  selector: "app-todos-footer",
  templateUrl: "./footer.component.html",
  styles: [],
})
export class FooterComponent {
  @Input() filter = "all"
  @Output() changeFilter = new EventEmitter()
  todosService = inject(TodosService)
}
