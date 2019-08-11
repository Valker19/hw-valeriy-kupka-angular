import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-gallery (selectedImg)="changeSelectedImg($event)"></app-gallery>
    <app-selected-img [selectedImgSrc]='selectedImgSrc'></app-selected-img>
  `
})

export class AppComponent {
  public selectedImgSrc = 'https://revizion.info/filez/sample.png';

  public changeSelectedImg($event): void {
    this.selectedImgSrc = $event.target.src;
  }
}
