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
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-3.webp',
      urlPath: 'mufreight',
      name: 'muFreight',
    },
    {
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/MPLIS.webp',
      urlPath: 'mplis',
      name: 'MPLIS',
    },
    {
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/IMAP.webp',
      urlPath: 'imap',
      name: 'IMAP',
    },
    {
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/Call-doctors.webp',
      urlPath: 'calldoctors',
      name: 'Call Doctors',
    },
    {
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/Redeli-1.webp',
      urlPath: 'redeli',
      name: 'Redeli',
    },
    {
      coverPath: 'https://ik.imagekit.io/zurahoang21/portfolio/Cake-1.webp',
      urlPath: 'cake',
      name: 'Cake by VPBank',
    },
  ];
  closeModal$ = new Subject();
  closeModal(reason?: any) {
    this.closeModal$.next(reason);
  }
}
