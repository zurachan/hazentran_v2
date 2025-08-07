import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export interface Candidate {
  name: string;
  ava: string;
  age: number;
  status: string;
  location: string;
  occupation: string;
  bio: string;
  goal: string[];
  motivate: string[];
  frustration: string[];
}

@Component({
  selector: 'app-call-doctors',
  templateUrl: './call-doctors.html',
  styleUrl: './call-doctors.css',
  imports: [TranslateModule],
})
export class CallDoctors {
  constructor() {}

  candidates: Candidate[] = [
    {
      name: 'cd.b.name',
      ava: 'https://ik.imagekit.io/zurahoang21/portfolio/nguyen-thi-b.png',
      age: 23,
      status: 'cd.b.status',
      location: 'cd.b.location',
      occupation: 'cd.b.occupation',
      bio: 'cd.b.bio',
      goal: ['cd.b.gn1', 'cd.b.gn2', 'cd.b.gn3'],
      motivate: ['cd.b.mov1', 'cd.b.mov2'],
      frustration: ['cd.b.frus1', 'cd.b.frus2'],
    },
    {
      name: 'cd.h.name',
      ava: 'https://ik.imagekit.io/zurahoang21/portfolio/quang-h.png',
      age: 37,
      status: 'cd.h.status',
      location: 'cd.h.location',
      occupation: 'cd.h.occupation',
      bio: 'cd.h.bio',
      goal: ['cd.h.gn1', 'cd.h.gn2', 'cd.h.gn3'],
      motivate: ['cd.h.mov1', 'cd.h.mov2'],
      frustration: ['cd.h.frus1', 'cd.h.frus2', 'cd.h.frus3'],
    },
    {
      name: 'cd.a.name',
      ava: 'https://ik.imagekit.io/zurahoang21/portfolio/nguyen-a.png',
      age: 23,
      status: 'cd.a.status',
      location: 'cd.a.location',
      occupation: 'cd.a.occupation',
      bio: 'cd.a.bio',
      goal: ['cd.a.gn1', 'cd.a.gn2'],
      motivate: ['cd.a.mov1', 'cd.a.mov2'],
      frustration: ['cd.a.frus1', 'cd.a.frus2'],
    },
  ];
}
