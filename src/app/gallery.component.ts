import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
    @Input()    
        public imgSrc1: string = 'https://luckypony.co.za/wp-content/uploads/2011/07/img_9786-480x480-300x300.jpg';
        public imgSrc2: string = 'https://raidline.com/image/cache/catalog/shop/CATEGORIES/Overwatch_RaidLine.com_Boost_OW-480x480.jpg';
        public imgSrc3: string = 'https://www.buubble.com/wp-content/uploads/2018/01/instagram-iimage-uai-480x480.jpg';
        public imgSrc4: string = 'http://park72.ru/wp-content/uploads/2019/03/30751965-g1sZbXU2Qu21PboY71IBA__vbF7Ok3nZFDXnx0-OGIk-1538338732-728-27e63c047f-1547377195-480x480.jpg';
    
    @Output()
        public selectedImg = new EventEmitter();

        public handleClick($event): void {
            this.selectedImg.emit($event);
        }
}