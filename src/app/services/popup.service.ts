import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageModel } from '../shared/models/image.model';
import { ProjectModel } from '../shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}
  private popupStack: string[] = [];
  register = (id: string) => this.popupStack.push(id);
  unregister = (id: string) =>
    (this.popupStack = this.popupStack.filter((p) => p !== id));
  isTop = (id: string) => this.popupStack[this.popupStack.length - 1] === id;

  private openImageSource = new Subject<{
    image: ImageModel;
    gallery?: ImageModel[];
  }>();
  private closeImageSource = new Subject<void>();
  openImagePopup$ = this.openImageSource.asObservable();
  closeImagePopup$ = this.closeImageSource.asObservable();
  openImagePopup(image: ImageModel, gallery?: ImageModel[]) {
    this.openImageSource.next({
      image: image,
      gallery: gallery,
    });
  }
  closeImagePopup() {
    this.closeImageSource.next();
  }

  private openPopupSource = new Subject<ProjectModel>();
  private closeProjectSource = new Subject<void>();
  openProjectPopup$ = this.openPopupSource.asObservable();
  closeProjectPopup$ = this.closeProjectSource.asObservable();
  openProjectPopup(project: ProjectModel) {
    this.openPopupSource.next(project);
  }
  closeProjectPopup() {
    this.closeProjectSource.next();
  }
}
