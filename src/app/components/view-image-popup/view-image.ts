import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ViewImageService } from '../../services/view-image.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.html',
  styleUrls: ['./view-image.css'],
  imports: [CommonModule],
})
export class ViewImage implements OnInit {
  constructor(private service: ViewImageService) {}
  isClosing = false;
  ngOnInit() {}
  onClose() {
    this.isClosing = true;
    this.service.closeModal();
  }

  
}
