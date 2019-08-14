import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    @Input()
        public imagesSrc: Array<string>;

    @Output()
        public selectedImg = new EventEmitter();

        public handleClick($event): void {
            this.selectedImg.emit($event);
        }
}