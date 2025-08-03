import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  ProjectModel,
  ProjectService,
} from '../../../services/project.service';
import { Cake } from './cake/cake';
import { CallDoctors } from './call-doctors/call-doctors';
import { Imap } from './imap/imap';
import { Mplis } from './mplis/mplis';
import { MuFreight } from './mu-freight/mu-freight';
import { Redeli } from './redeli/redeli';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  imports: [CommonModule],
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @Input() project!: ProjectModel;
  constructor(private projectService: ProjectService) {}
  isClosing = false;
  @ViewChild('prjdetail', { read: ViewContainerRef })
  prjdetail!: ViewContainerRef;
  ngOnInit(): void {
    document.body.style.overflow = 'hidden'; // ❌ Không cho scroll body
  }
  ngAfterViewInit(): void {
    this.loadDynamicComponent(); // ✅ ViewChild đã có giá trị
  }
  private loadDynamicComponent() {
    this.prjdetail.clear(); // xoá trước
    let comp: any;
    switch (this.project.urlPath) {
      case 'mufreight':
        comp = MuFreight;
        break;
      case 'mplis':
        comp = Mplis;
        break;
      case 'imap':
        comp = Imap;
        break;
      case 'calldoctors':
        comp = CallDoctors;
        break;
      case 'redeli':
        comp = Redeli;
        break;
      case 'cake':
        comp = Cake;
        break;
    }
    if (comp) this.prjdetail.createComponent(comp);
  }
  onClose() {
    this.isClosing = true;
    this.projectService.closeModal();
  }
  ngOnDestroy(): void {
    document.body.style.overflow = ''; // ✅ Khôi phục scroll khi đóng popup
  }
}
