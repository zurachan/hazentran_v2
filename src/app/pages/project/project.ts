import { CommonModule } from '@angular/common';
import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PopupService } from '../../services/popup.service';
import { ProjectService } from '../../services/project.service';
import { ViewImage } from '../../shared/components/view-image-popup/view-image';
import { ProjectModel } from '../../shared/models/project.model';
import { ProjectDetailComponent } from './project-detail/project-detail';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [CommonModule, RouterModule, TranslateModule],
  host: {
    class: 'py-[12px] px-[24px] flex-1 flex flex-col gap-[24px] lg:w-full',
  },
})
export class Project implements OnInit {
  constructor(
    private projectService: ProjectService,
    private popupService: PopupService
  ) {
    this.projects = this.projectService.projects;
  }
  ngOnInit(): void {
    this.listenOpenProjectDetail();
    this.listenCloseProjectDetail();
    this.listenOpenImage();
    this.listenCloseImage();
  }
  projects: ProjectModel[] = [];
  @ViewChild('modal', { read: ViewContainerRef, static: true })
  projectContainer!: ViewContainerRef;
  projectComponentRef?: ComponentRef<ProjectDetailComponent>;

  @ViewChild('image', { read: ViewContainerRef, static: true })
  imageContainer!: ViewContainerRef;
  imageComponentRef?: ComponentRef<ViewImage>;

  openProjectDetail(item: ProjectModel) {
    this.popupService.openProjectPopup(item);
  }
  listenOpenProjectDetail() {
    this.popupService.openProjectPopup$.subscribe((data) => {
      this.projectContainer.clear();
      this.projectComponentRef = this.projectContainer.createComponent(
        ProjectDetailComponent
      );
      this.projectComponentRef.setInput('project', data);
      this.popupService.register('project');
      this.projectComponentRef.changeDetectorRef.detectChanges();
    });
  }
  listenCloseProjectDetail() {
    this.popupService.closeProjectPopup$.subscribe((reason) => {
      this.projectContainer.clear();
      this.popupService.unregister('project');
      if (this.projectComponentRef) {
        this.projectComponentRef.destroy();
        this.projectComponentRef = undefined;
      }
    });
  }
  listenOpenImage() {
    this.popupService.openImagePopup$.subscribe((data) => {
      this.imageContainer.clear();
      this.imageComponentRef = this.imageContainer.createComponent(ViewImage);
      this.imageComponentRef.setInput('image', data.image);
      this.imageComponentRef.setInput('gallery', data.gallery);
      this.popupService.register('image');
      this.imageComponentRef.changeDetectorRef.detectChanges();
    });
  }
  listenCloseImage() {
    this.popupService.closeImagePopup$.subscribe(() => {
      this.imageContainer.clear();
      this.popupService.unregister('image');
      if (this.imageComponentRef) {
        this.imageComponentRef?.destroy();
        this.imageComponentRef = undefined;
      }
    });
  }
  sendMessage() {
    window.open('https://zalo.me/0964735598', '_blank');
  }
}
