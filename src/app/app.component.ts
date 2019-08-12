import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-gallery (selectedImg)="changeSelectedImg($event)" [imagesSrc]='galleryImages'></app-gallery>
    <app-selected-img [selectedImgSrc]='selectedImgSrc'></app-selected-img>
  `
})

export class AppComponent {
  public selectedImgSrc = 'https://revizion.info/filez/sample.png';
  public galleryImages: Object = {
    imgSrc1: 'https://luckypony.co.za/wp-content/uploads/2011/07/img_9786-480x480-300x300.jpg',
    imgSrc2: 'http://allertoncatrescue.co.uk/wp-content/uploads/2017/06/19732030_1560020827415469_3195340783473620908_n-210x210.jpg',
    imgSrc3: 'https://www.buubble.com/wp-content/uploads/2018/01/instagram-iimage-uai-480x480.jpg',
    imgSrc4: 'http://park72.ru/wp-content/uploads/2019/03/30751965-g1sZbXU2Qu21PboY71IBA__vbF7Ok3nZFDXnx0-OGIk-1538338732-728-27e63c047f-1547377195-480x480.jpg'
  }

  public changeSelectedImg($event): void {
    this.selectedImgSrc = $event.target.src;
  }
}
