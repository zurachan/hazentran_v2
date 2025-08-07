import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-redeli',
  templateUrl: './redeli.html',
  styleUrl: './redeli.css',
  imports: [TranslateModule],
})
export class Redeli {
  constructor() {}
  download() {
    window.open(
      'https://drive.google.com/file/d/1keSpdhT9R3nc8pelqAvM_5q2bo9miT2p/view',
      '_blank'
    );
  }
}
