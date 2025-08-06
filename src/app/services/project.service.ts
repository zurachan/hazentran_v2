import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ProjectModel {
  coverPath: string;
  urlPath: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  projects: ProjectModel[] = [
    {
      coverPath: '/image/MuFreight-3.webp',
      urlPath: 'mufreight',
      name: 'muFreight',
    },
    {
      coverPath: '/image/MPLIS.webp',
      urlPath: 'mplis',
      name: 'MPLIS',
    },
    {
      coverPath: '/image/IMAP.webp',
      urlPath: 'imap',
      name: 'IMAP',
    },
    {
      coverPath: '/image/Call-doctors.webp',
      urlPath: 'calldoctors',
      name: 'Call Doctors',
    },
    {
      coverPath: '/image/Redeli-1.webp',
      urlPath: 'redeli',
      name: 'Redeli',
    },
    {
      coverPath: '/image/Cake-1.webp',
      urlPath: 'cake',
      name: 'Cake by VPBank',
    },
  ];
  closeModal$ = new Subject();
  closeModal(reason?: any) {
    this.closeModal$.next(reason);
  }
}
