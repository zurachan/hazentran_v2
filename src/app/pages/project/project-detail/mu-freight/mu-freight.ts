import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PopupService } from '../../../../services/popup.service';
import { ImageModel } from '../../../../shared/models/image.model';

@Component({
  selector: 'app-mu-freight',
  templateUrl: './mu-freight.html',
  styleUrl: './mu-freight.css',
  imports: [TranslateModule],
})
export class MuFreight {
  constructor(private popupService: PopupService) {}
  gallery: ImageModel[] = [
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-5-crop-square.jpeg?updatedAt=1754676837010',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-5-origin.jpeg?updatedAt=1754702126767',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-6-crop.jpeg?updatedAt=1754714248656',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-6-origin.jpeg?updatedAt=1754702126841',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-7-crop.png?updatedAt=1754714253633',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-7-origin.png?updatedAt=1754714255594',
    },
    {
      cropUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-8-crop-square.jpeg?updatedAt=1754676837253',
      originUrl:
        'https://ik.imagekit.io/zurahoang21/portfolio/MuFreight-8-origin.webp?updatedAt=1754703130880',
    },
  ];
  viewImage(item: ImageModel) {
    this.popupService.openImagePopup(item, this.gallery);
  }
}
