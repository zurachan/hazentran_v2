import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Candidate } from '../call-doctors/call-doctors';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.html',
  styleUrl: './cake.css',
  imports: [TranslateModule],
})
export class Cake {
  constructor() {}

  candidates: Candidate[] = [
    {
      name: 'cake.up.quan.name',
      ava: 'https://ik.imagekit.io/zurahoang21/portfolio/hong-quan.png',
      age: 30,
      status: 'cake.up.quan.status',
      location: 'cake.up.quan.location',
      occupation: 'cake.up.quan.occupation',
      bio: 'cake.up.quan.bio',
      goal: ['cake.up.quan.gn1'],
      motivate: [],
      frustration: ['cake.up.quan.frus1', 'cake.up.quan.frus2'],
    },
    {
      name: 'cake.up.nhi.name',
      ava: 'https://ik.imagekit.io/zurahoang21/portfolio/thanh-nhi.png',
      age: 30,
      status: 'cake.up.nhi.status',
      location: 'cake.up.nhi.location',
      occupation: 'cake.up.nhi.occupation',
      bio: 'cake.up.nhi.bio',
      goal: ['cake.up.nhi.gn1'],
      motivate: [],
      frustration: ['cake.up.nhi.frus1', 'cake.up.nhi.frus2'],
    },
  ];
}
