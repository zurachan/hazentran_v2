import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Credit } from './layout/credit/credit';
import { Navmenu } from './layout/navmenu/navmenu';
import { Sidebar } from './layout/sidebar/sidebar';
import { MenuService } from './services/menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, Sidebar, Navmenu, TranslateModule, Credit],
  providers: [],
  host: { class: 'page' },
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
    private menuService: MenuService
  ) {
    let currentLang = localStorage.getItem('lang');
    if (!currentLang) currentLang = 'vi';
    this.translateService.setDefaultLang(currentLang);
    this.menuService.changeLang(currentLang === 'en');
    this.menuService.isEnglish$.subscribe((isEnglish) => {
      let lang = isEnglish ? 'en' : 'vi';
      this.translateService.use(lang);
    });
  }
}
