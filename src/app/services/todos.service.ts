import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

export interface ITodo {
  id: string
  title: string
  completed: boolean
}

@Injectable({
  providedIn: "root",
})
export class TodosService {
  todos$ = new BehaviorSubject<ITodo[]>([
    { id: "hello", title: "Hello world!", completed: true },
  ])

  addTodo(title: string) {
    const newTodo: ITodo = {
      id: `${Date.now()},${title}`,
      title,
      completed: false,
    }
    this.todos$.next(this.todos$.getValue().concat([newTodo]))
  }

  delTodo(id: string) {
    this.todos$.next(this.todos$.getValue().filter((t) => t.id !== id))
  }

  toggleTodo(id: string) {
    this.todos$.next(
      this.todos$
        .getValue()
        .map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }

  clearCompletedTodos() {
    this.todos$.next(this.todos$.getValue().filter((t) => !t.completed))
  }
}
