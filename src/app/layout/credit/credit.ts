import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.html',
  styleUrl: './credit.css',
  imports: [TranslateModule],
  host: { class: 'page__credit' },
})
export class Credit implements OnInit {
  constructor() {}

  ngOnInit() {}
}
