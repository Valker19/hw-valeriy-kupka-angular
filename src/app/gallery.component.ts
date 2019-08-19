import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ImageLoadService } from './imageLoad.service';

@Component({
  selector: 'app-gallery',
  template: `
        <div *ngFor="let data of images">
          <img [src]="data[0]"/>
          <div [ngStyle]="{ 'color': 'whitesmoke' }">{{data[1] | date: 'medium'}}</div>
        </div>
    `
})

export class GalleryComponent implements OnInit {
  public images: Array<Array<string | Date>> = [];

  constructor(private service: ImageLoadService) { }

  ngOnInit(): void {
    this.service.imageSrc.subscribe(
      (value) => {
        this.images.push(value);
      }
    )
  }
}
