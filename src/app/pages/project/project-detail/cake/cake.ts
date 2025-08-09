import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Participant } from '../../../../shared/models/participant.model';
import { PopupService } from '../../../../services/popup.service';
import { ImageModel } from '../../../../shared/models/image.model';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.html',
  styleUrl: './cake.css',
  imports: [TranslateModule],
})
export class Cake {
  constructor(public popupService: PopupService) {}

  candidates: Participant[] = [
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
  uf = new ImageModel(
    'https://ik.imagekit.io/zurahoang21/portfolio/cake-uf-2.webp?updatedAt=1754731409596',
    'https://ik.imagekit.io/zurahoang21/portfolio/cake-uf-2.webp?updatedAt=1754731409596'
  );
  ia = new ImageModel(
    'https://ik.imagekit.io/zurahoang21/portfolio/cake-ia-2.webp?updatedAt=1754731409759',
    'https://ik.imagekit.io/zurahoang21/portfolio/cake-ia-2.webp?updatedAt=1754731409759'
  );
  wf: ImageModel[] = [
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/cake-wf-2.png?updatedAt=1754584038084',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/cake-wf-2.png?updatedAt=1754584038084',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/cake-wf-1.png?updatedAt=1754584038003',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/cake-wf-1.png?updatedAt=1754584038003',
    },
  ];
  ms = new ImageModel(
    'https://ik.imagekit.io/zurahoang21/portfolio/SUS.png?updatedAt=1754588803541',
    'https://ik.imagekit.io/zurahoang21/portfolio/SUS.png?updatedAt=1754588803541'
  );
}
