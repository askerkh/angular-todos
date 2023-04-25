import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component"
import { TodosComponent } from "./todos.component"
import { MainComponent } from "./components/main/main.component"
import { FooterComponent } from "./components/footer/footer.component"
import { SharedModule } from "../shared/shared.module"
import { TodosFilterPipe } from "../pipes/todos-filter.pipe"

const routes: Routes = [
  {
    path: "",
    component: TodosComponent,
  },
]

@NgModule({
  declarations: [
    HeaderComponent,
    TodosComponent,
    MainComponent,
    FooterComponent,
    TodosFilterPipe,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class TodosModule {}
