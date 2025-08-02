import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { saxCallBold, saxMagicpenBold } from '@ng-icons/iconsax/bold';
import { saxCallOutline, saxMagicpenOutline } from '@ng-icons/iconsax/outline';
import { TranslateModule } from '@ngx-translate/core';
import { filter, Observable, Subscription } from 'rxjs';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.html',
  styleUrl: './navmenu.css',
  imports: [CommonModule, NgIcon, RouterModule, TranslateModule, FormsModule],
  providers: [
    provideIcons({
      saxMagicpenBold,
      saxMagicpenOutline,
      saxCallBold,
      saxCallOutline,
    }),
  ],
  host: { class: 'page__navmenu' },
})
export class Navmenu implements OnDestroy {
  constructor(public menuService: MenuService, private router: Router) {
    this.menu$ = this.menuService.menu$;
    this.menuService.isEnglish$.subscribe((isEnglish) => {
      this.isEnglish = isEnglish;
    });
    this.sub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        let currentUrl = (event.urlAfterRedirects || event.url).replace(
          /^\//,
          ''
        );
        let updatedMenu = this.menuService.getMenu().map((item) => {
          return { ...item, isActive: currentUrl === item.path };
        });

        this.menuService.updateMenu(updatedMenu);
      });
  }
  menu$: Observable<MenuItem[]>;
  private sub: Subscription;
  isEnglish = false;
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
