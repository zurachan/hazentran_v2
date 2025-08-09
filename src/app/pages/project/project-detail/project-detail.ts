import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PopupService } from '../../../services/popup.service';
import { ProjectService } from '../../../services/project.service';
import { Cake } from './cake/cake';
import { CallDoctors } from './call-doctors/call-doctors';
import { Imap } from './imap/imap';
import { Mplis } from './mplis/mplis';
import { MuFreight } from './mu-freight/mu-freight';
import { Redeli } from './redeli/redeli';
import { ProjectModel } from '../../../shared/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
  imports: [CommonModule],
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @Input() project!: ProjectModel;
  constructor(private popupService: PopupService) {}
  isClosing = false;
  @ViewChild('prjdetail', { read: ViewContainerRef })
  prjdetail!: ViewContainerRef;
  ngOnInit(): void {
    // ❌ Không cho scroll body
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.handleKeydown);
  }
  ngAfterViewInit(): void {
    this.loadDynamicComponent();
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
    this.popupService.closeProjectPopup();
  }
  handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.popupService.isTop('project'))
      this.onClose();
  };
  ngOnDestroy(): void {
    // ✅ Khôi phục scroll khi đóng popup
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.handleKeydown);
  }
}
