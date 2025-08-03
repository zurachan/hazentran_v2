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
      coverPath: '/image/MuFreight-3.jpeg',
      urlPath: 'mufreight',
      name: 'muFreight',
    },
    {
      coverPath: '/image/MPLIS.png',
      urlPath: 'mplis',
      name: 'MPLIS',
    },
    {
      coverPath: '/image/IMAP.png',
      urlPath: 'imap',
      name: 'IMAP',
    },
    {
      coverPath: '/image/Call-doctors.png',
      urlPath: 'calldoctors',
      name: 'Call Doctors',
    },
    {
      coverPath: '/image/Redeli-1.png',
      urlPath: 'redeli',
      name: 'Redeli',
    },
    {
      coverPath: '/image/Cake-1.png',
      urlPath: 'cake',
      name: 'Cake by VPBank',
    },
  ];
  closeModal$ = new Subject();
  closeModal(reason?: any) {
    this.closeModal$.next(reason);
  }
}
