import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectService } from '../../services/project.service';
import { ProjectModel } from './../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [RouterModule, TranslateModule],
  host: { class: 'page__content' },
})
export class Project {
  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.projects;
  }
  projects: ProjectModel[] = [];
}
