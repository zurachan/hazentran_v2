import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupService } from '../../../../services/popup.service';
import { ImageModel } from '../../../../shared/models/image.model';

@Component({
  selector: 'app-mplis',
  templateUrl: './mplis.html',
  styleUrl: './mplis.css',
  imports: [TranslateModule],
})
export class Mplis {
  constructor(public popupService: PopupService) {}
  gallery: ImageModel[] = [
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-9.webp?updatedAt=1754463898817',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/mplis-1-origin.webp?updatedAt=1754726952174',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MPLIS-2.webp?updatedAt=1754462615325',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/mplis-2-origin.jpeg?updatedAt=1754726677156',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MPLIS-3.webp?updatedAt=1754462615923',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/mplis-3-origin.jpeg?updatedAt=1754726782064',
    },
  ];
}
