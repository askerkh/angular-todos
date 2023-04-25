import { DOCUMENT } from "@angular/common"
import { Component, inject, OnInit } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Component({
  selector: "app-theme-switcher",
  templateUrl: "./theme-switcher.component.html",
  styles: [],
})
export class ThemeSwitcherComponent implements OnInit {
  document = inject(DOCUMENT)
  theme$ = new BehaviorSubject("dark")

  ngOnInit(): void {
    this.theme$.subscribe((v) => {
      if (v === "dark") this.document.documentElement.classList.add("dark")
      else this.document.documentElement.classList.remove("dark")
    })
  }
}
