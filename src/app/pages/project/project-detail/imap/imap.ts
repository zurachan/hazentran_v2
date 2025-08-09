import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupService } from '../../../../services/popup.service';
import { ImageModel } from './../../../../shared/models/image.model';

@Component({
  selector: 'app-imap',
  templateUrl: './imap.html',
  styleUrl: './imap.css',
  imports: [TranslateModule],
})
export class Imap implements OnInit {
  constructor(public popupService: PopupService) {}
  ngOnInit(): void {}
  imap1 = new ImageModel(
    'https://ik.imagekit.io/zurahoang21/portfolio/imap-1.webp?updatedAt=1754489637406',
    'https://ik.imagekit.io/zurahoang21/portfolio/imap-1-origin.png?updatedAt=1754727682746'
  );

  gallery: ImageModel[] = [
    {
      cropUrl: 'https://ik.imagekit.io/zurahoang21/portfolio/IMAP-3.webp',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/IMAP-3-origin.png?updatedAt=1754729044855',
    },
    {
      cropUrl: 'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-10.webp',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-10-origin.webp?updatedAt=1754729777294',
    },
    {
      cropUrl: 'https://ik.imagekit.io/zurahoang21/portfolio/IMAP-2.webp',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/IMAP-2-origin.png?updatedAt=1754729045567',
    },
  ];
}
