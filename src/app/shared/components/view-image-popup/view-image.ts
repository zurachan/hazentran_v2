import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { PopupService } from '../../../services/popup.service';
import { ImageModel } from '../../models/image.model';
@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.html',
  styleUrls: ['./view-image.css'],
  imports: [CommonModule],
})
export class ViewImage implements OnInit, OnChanges, OnDestroy {
  @Input() image!: ImageModel;
  @Input() gallery?: ImageModel[];
  currentIndex = 0;
  currentImage!: ImageModel;

  constructor(private popupService: PopupService) {}
  isClosing = false;
  zoomLevel = 1;
  isZoomed = false;
  minZoom = 1;
  maxZoom = 5;

  ngOnInit() {
    this.setupInitialImage();
    window.addEventListener('keydown', this.handleKeydown);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['image'] || changes['gallery']) {
      this.setupInitialImage();
    }
  }
  private setupInitialImage() {
    this.currentImage = this.image;
    if (this.gallery && this.gallery.length > 0) {
      const idx = this.gallery.findIndex((img) => img === this.image);
      this.currentIndex = idx >= 0 ? idx : 0;
    }
  }
  onClose() {
    this.isClosing = true;
    this.popupService.closeImagePopup();
  }
  onZoomIn(event: MouseEvent) {
    if (this.zoomLevel < this.maxZoom)
      this.zoomLevel = +(this.zoomLevel + 1).toFixed(2);
  }
  onZoomOut(event: MouseEvent) {
    event.preventDefault();
    if (this.zoomLevel > this.minZoom)
      this.zoomLevel = +(this.zoomLevel - 1).toFixed(2);
  }
  nextImage() {
    if (this.gallery && this.currentIndex < this.gallery.length - 1) {
      this.currentIndex++;
      this.currentImage = this.gallery[this.currentIndex];
      this.resetZoom();
    }
  }
  prevImage() {
    if (this.gallery && this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.gallery[this.currentIndex];
      this.resetZoom();
    }
  }
  handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.popupService.isTop('image'))
      this.onClose();
    else if (event.key === 'ArrowLeft') this.prevImage();
    else if (event.key === 'ArrowRight') this.nextImage();
  };
  private resetZoom() {
    this.zoomLevel = 1;
  }
  hasGallery(): boolean {
    return !!this.gallery && this.gallery.length > 1;
  }
  get imagesLength(): number {
    return this.gallery ? this.gallery.length : 0;
  }
  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeydown);
  }
}
