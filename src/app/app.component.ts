import { Component, OnInit } from '@angular/core';
import { LoadImagesService } from './loadImages.service';

@Component({
  selector: 'app-root',
  template: `
    <img *ngFor='let image of images' [src]='image' width='200' height='200'>
  `
})

export class AppComponent implements OnInit {
  public images: Array<string>;
  
  constructor(public service: LoadImagesService) {}

  ngOnInit(): void {
    this.images = this.service.images;
  }
}
