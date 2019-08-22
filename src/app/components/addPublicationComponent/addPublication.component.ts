import { Component, ViewChild, ElementRef } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
    selector: 'add-publication-component',
    templateUrl: './addPublication.component.html',
    styleUrls: ['./addPublication.component.scss']
})

export class AddPublicationComponent {
    public textForButton: string = 'Load image';

    @ViewChild('selectImage', { static: false })
    imageInput: ElementRef;

    constructor(private service: GalleryService) { };

    handleLoadImage($event) {
        this.service.addPublication($event.target.files[0]);
    }

    openLink() {
        this.imageInput.nativeElement.click();
    }
}