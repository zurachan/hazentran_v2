import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navmenu } from './layout/navmenu/navmenu';
import { Sidebar } from './layout/sidebar/sidebar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, Sidebar, Navmenu],
  providers: [],
  host: { class: 'page' },
})
export class AppComponent {}
