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
  public galleryImages: Array<string> = [
    'https://luckypony.co.za/wp-content/uploads/2011/07/img_9786-480x480-300x300.jpg',
    'http://allertoncatrescue.co.uk/wp-content/uploads/2017/06/19732030_1560020827415469_3195340783473620908_n-210x210.jpg',
    'https://www.buubble.com/wp-content/uploads/2018/01/instagram-iimage-uai-480x480.jpg',
    'http://park72.ru/wp-content/uploads/2019/03/30751965-g1sZbXU2Qu21PboY71IBA__vbF7Ok3nZFDXnx0-OGIk-1538338732-728-27e63c047f-1547377195-480x480.jpg',
    'http://mid-congroup.com/wp-content/uploads/2015/07/1b9363727d6927d1ca33908d192ddfc0ebfe305d_m.jpg',
    'http://demo.ufothemes.com/enchanted/wp-content/uploads/sites/22/2014/11/Dollarphotoclub_54110222-480x480.jpg',
    'https://misto.media/wp-content/uploads/2019/06/Gruziya-budet-vstrechat-turistov-s-vinom-v-aeroportakh-2-480x480.jpg',
    'https://postnauka.ru/img/2018/07/giphy-1-4-480x480.gif',
  ]

  public changeSelectedImg($event): void {
    this.selectedImgSrc = $event.target.src;
  }
}
