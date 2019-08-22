import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { imageCardContent } from 'src/app/models';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html'
})

export class GalleryComponent implements OnInit {
    publications: Array<imageCardContent> = [];

    constructor(private service: GalleryService) { };

    ngOnInit(): void {
        this.service.publication.subscribe(
            (publication) => {
                this.publications.push(publication)
            }
        )
    }
}