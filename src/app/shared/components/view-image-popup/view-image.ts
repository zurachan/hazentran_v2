import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
  constructor(private popupService: PopupService) {}

  @Input() image!: ImageModel;
  @Input() gallery?: ImageModel[];
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('imageElement') imageElement!: ElementRef;
  currentIndex = 0;
  currentImage!: ImageModel;
  isClosing = false;

  // Zoom properties
  zoomLevel = 1;
  minZoom = 1;
  maxZoom = 5;
  zoomStep = 0.5;

  // Pan properties
  panX = 0;
  panY = 0;
  isPanning = false;
  startPanX = 0;
  startPanY = 0;
  startMouseX = 0;
  startMouseY = 0;

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
  get isZoomed(): boolean {
    return this.zoomLevel > 1;
  }
  get imageTransform(): string {
    let scale = `scale(${this.zoomLevel})`;
    let translate = this.isZoomed
      ? `translate(${this.panX}px, ${this.panY}px)`
      : '';
    return `${scale} ${translate}`.trim();
  }
  private constrainPan(panX: number, panY: number): { x: number; y: number } {
    if (!this.imageElement || !this.imageContainer) return { x: panX, y: panY };
    try {
      let img = this.imageElement.nativeElement;
      let container = this.imageContainer.nativeElement;

      // Get container dimensions
      let containerRect = container.getBoundingClientRect();
      let containerWidth = containerRect.width;
      let containerHeight = containerRect.height;

      // Get image natural displayed size (không có zoom)
      let imgRect = img.getBoundingClientRect();
      // Chia cho zoomLevel để lấy kích thước gốc
      let baseImgWidth = imgRect.width / this.zoomLevel;
      let baseImgHeight = imgRect.height / this.zoomLevel;

      // Calculate zoomed dimensions
      let zoomedWidth = baseImgWidth * this.zoomLevel;
      let zoomedHeight = baseImgHeight * this.zoomLevel;

      let constrainedX = panX;
      let constrainedY = panY;

      if (zoomedWidth > containerWidth) {
        let maxPanX = (zoomedWidth - containerWidth) / (this.zoomLevel * 2);
        constrainedX = Math.max(-maxPanX, Math.min(maxPanX, panX));
      } else constrainedX = 0;
      if (zoomedHeight > containerHeight) {
        let maxPanY = (zoomedHeight - containerHeight) / (this.zoomLevel * 2);
        constrainedY = Math.max(-maxPanY, Math.min(maxPanY, panY));
      } else constrainedY = 0;
      return { x: constrainedX, y: constrainedY };
    } catch (error) {
      console.warn('Error in constrainPan:', error);
      return { x: panX, y: panY };
    }
  }
  private applyConstraints() {
    let constrainedPan = this.constrainPan(this.panX, this.panY);
    this.panX = constrainedPan.x;
    this.panY = constrainedPan.y;
  }
  zoomIn() {
    if (this.zoomLevel < this.maxZoom) {
      this.zoomLevel = Math.min(
        this.maxZoom,
        +(this.zoomLevel + this.zoomStep).toFixed(2)
      );
      if (this.zoomLevel === 1 + this.zoomStep) {
        this.panX = 0;
        this.panY = 0;
      } else setTimeout(() => this.applyConstraints(), 0);
    }
  }
  zoomOut() {
    if (this.zoomLevel > this.minZoom) {
      this.zoomLevel = Math.max(
        this.minZoom,
        +(this.zoomLevel - this.zoomStep).toFixed(2)
      );
      if (this.zoomLevel === 1) {
        this.panX = 0;
        this.panY = 0;
      } else setTimeout(() => this.applyConstraints(), 0);
    }
  }
  resetZoom() {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
  }
  onMouseDown(event: MouseEvent) {
    if (this.isZoomed) {
      this.isPanning = true;
      this.startPanX = this.panX;
      this.startPanY = this.panY;
      this.startMouseX = event.clientX;
      this.startMouseY = event.clientY;
      event.preventDefault();
    }
  }
  onMouseMove(event: MouseEvent) {
    if (this.isPanning && this.isZoomed) {
      let deltaX = event.clientX - this.startMouseX;
      let deltaY = event.clientY - this.startMouseY;

      let newPanX = this.startPanX + deltaX;
      let newPanY = this.startPanY + deltaY;

      // Apply boundary constraints
      let constrainedPan = this.constrainPan(newPanX, newPanY);
      this.panX = constrainedPan.x;
      this.panY = constrainedPan.y;
    }
  }
  onMouseUp(event: MouseEvent) {
    this.isPanning = false;
  }
  onMouseLeave(event: MouseEvent) {
    this.isPanning = false;
  }
  onClose() {
    this.isClosing = true;
    this.popupService.closeImagePopup();
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
    if (event.key === 'Escape') {
      this.onClose();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === '+' || event.key === '=') {
      this.zoomIn();
    } else if (event.key === '-') {
      this.zoomOut();
    } else if (event.key === '0') {
      this.resetZoom();
    }
  };
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
