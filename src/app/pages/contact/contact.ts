import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  imports: [TranslateModule],
  host: {
    class:
      'py-[12px] px-[24px] flex-1 flex flex-col gap-[24px] md:p-[32px] lg:max-w-[860px] lg:w-full',
  },
})
export class Contact implements OnInit {
  constructor() {}

  ngOnInit() {}
}
