import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-selected-img',
    template: `
        <div class="selected-image">
            <img [src]='selectedImgSrc'>
        </div>
    `,
    styleUrls: ['./selectedImage.component.scss']
})

export class SelectedImgComponent {
    @Input()
        public selectedImgSrc: string = 'https://revizion.info/filez/sample.png'
}