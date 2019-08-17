import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-image-input (imageSrc)='handleImageSrc($event)'></app-image-input>
    <app-gallery [imageSrc]='image'></app-gallery>
  `
})

export class AppComponent {
  public image: string;

  public handleImageSrc($event): void {
    this.image = $event;
  }
}
