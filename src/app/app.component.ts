import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { saxMagicpenBold } from '@ng-icons/iconsax/bold';
import { saxCallOutline } from '@ng-icons/iconsax/outline';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgIcon, RouterModule],
  providers: [provideIcons({ saxMagicpenBold, saxCallOutline })],
})
export class AppComponent {}
