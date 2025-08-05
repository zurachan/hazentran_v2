import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.html',
  styleUrl: './credit.css',
  imports: [TranslateModule],
  host: { class: 'flex flex-col pt-[12px] pb-[12px] px-[24px] gap-[8px]' },
})
export class Credit implements OnInit {
  constructor() {}

  ngOnInit() {}
}
