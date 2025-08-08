import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewImageService {
  constructor() {}
  closeModal$ = new Subject();
  closeModal(reason?: any) {
    this.closeModal$.next(reason);
  }
}
