import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface MenuItem {
  icon: string;
  title: string;
  activeIcon: string;
  isActive: boolean;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}
  private _menu = new BehaviorSubject<MenuItem[]>([
    {
      icon: 'saxMagicpenOutline',
      title: 'menu.project',
      activeIcon: 'saxMagicpenBold',
      isActive: false,
      path: '',
    },
    {
      icon: 'saxCallOutline',
      title: 'menu.contact',
      activeIcon: 'saxCallBold',
      isActive: false,
      path: 'contact',
    },
  ]);

  // Observable cho component subscribe
  menu$ = this._menu.asObservable();
  // Lấy giá trị hiện tại của menu
  getMenu(): MenuItem[] {
    return this._menu.value;
  }
  // Cập nhật menu (ví dụ toggle active)
  updateMenu(newMenu: MenuItem[]) {
    this._menu.next(newMenu);
  }

  private _isEnglish = new BehaviorSubject<boolean>(false);
  isEnglish$ = this._isEnglish.asObservable();
  changeLang(isEnglish: boolean) {
    this._isEnglish.next(isEnglish);
    let lang = isEnglish ? 'en' : 'vi';
    localStorage.setItem('lang', lang);
  }
}
