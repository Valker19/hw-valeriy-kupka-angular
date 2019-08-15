import { Component, OnInit } from '@angular/core';
import { LoadImagesService } from './loadImages.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
        public imagesSrc: Array<string>;

        constructor(public service: LoadImagesService) {
        
        }

        ngOnInit(): void {
            this.imagesSrc = this.service.images;
        }
}