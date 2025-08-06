import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-call-doctors',
  templateUrl: './call-doctors.html',
  styleUrl: './call-doctors.css',
  imports: [TranslateModule],
})
export class CallDoctors implements OnInit {
  constructor() {}

  ngOnInit() {}
}
