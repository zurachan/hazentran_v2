import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { saxCallBold, saxMagicpenBold } from '@ng-icons/iconsax/bold';
import { saxCallOutline, saxMagicpenOutline } from '@ng-icons/iconsax/outline';
import { filter, Observable, Subscription } from 'rxjs';
import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [CommonModule, NgIcon, RouterModule],
  providers: [
    provideIcons({
      saxMagicpenBold,
      saxMagicpenOutline,
      saxCallBold,
      saxCallOutline,
    }),
  ],
  host: { class: 'page__sidebar' },
})
export class Sidebar implements OnDestroy {
  constructor(private menuService: MenuService, private router: Router) {
    this.menu$ = this.menuService.menu$;
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
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
