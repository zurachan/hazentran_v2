export class ImageModel {
  cropUrl: string;
  originUrl: string;
  constructor(cropUrl: string = '', originUrl: string = '') {
    this.cropUrl = cropUrl;
    this.originUrl = originUrl;
  }
}
