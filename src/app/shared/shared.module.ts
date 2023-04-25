import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { ThemeSwitcherComponent } from "src/app/shared/components/theme-switcher/theme-switcher.component"

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [FormsModule, CommonModule, ThemeSwitcherComponent],
  declarations: [ThemeSwitcherComponent],
})
export class SharedModule {}
