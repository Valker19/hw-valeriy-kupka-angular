import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    @Input()
        public imagesSrc: Object = {
            imgSrc1: 'https://zapadbaltobuv.ru/image/cache/no_image-210x210.png',
            imgSrc2: 'https://zapadbaltobuv.ru/image/cache/no_image-210x210.png',
            imgSrc3: 'https://zapadbaltobuv.ru/image/cache/no_image-210x210.png',
            imgSrc4: 'https://zapadbaltobuv.ru/image/cache/no_image-210x210.png'
        }

    @Output()
        public selectedImg = new EventEmitter();

        public handleClick($event): void {
            this.selectedImg.emit($event);
        }
}