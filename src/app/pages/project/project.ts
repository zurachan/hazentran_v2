import {
  Component,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectService } from '../../services/project.service';
import { ProjectModel } from './../../services/project.service';
import { ProjectDetailComponent } from './project-detail/project-detail';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [RouterModule, TranslateModule],
  host: { class: 'page__content' },
})
export class Project implements OnInit {
  constructor(
    private projectService: ProjectService,
    private container: ViewContainerRef
  ) {
    this.projects = this.projectService.projects;
  }
  ngOnInit(): void {
    this.closeProjectDetail();
  }
  projects: ProjectModel[] = [];
  @ViewChild('modal', { read: ViewContainerRef, static: true })
  componentRef!: ComponentRef<ProjectDetailComponent>;

  openProjectDetail(item: ProjectModel) {
    this.container.clear();
    this.componentRef = this.container.createComponent(ProjectDetailComponent);
    this.componentRef.setInput('project', item);
    this.componentRef.changeDetectorRef.detectChanges();
  }

  closeProjectDetail() {
    this.projectService.closeModal$.subscribe((reason) => {
      this.container.clear();
      if (this.componentRef) this.componentRef.destroy();
    });
  }

  sendMessage() {
    window.open('https://zalo.me/0964735598', '_blank');
  }
}
