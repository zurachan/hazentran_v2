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
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  imports: [CommonModule, NgIcon, RouterModule, TranslateModule, FormsModule],
  providers: [
    provideIcons({
      saxMagicpenBold,
      saxMagicpenOutline,
      saxCallBold,
      saxCallOutline,
    }),
  ],
  host: {
    class:
      'px-[24px] pt-[16px] pb-[12px] md:px-[16px] md:py-[32px] md:flex md:flex-col md:border-r md:border-r-[#d9d9d9] lg:px-[60px] lg:py-[40px]',
  },
})
export class Sidebar implements OnDestroy {
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
