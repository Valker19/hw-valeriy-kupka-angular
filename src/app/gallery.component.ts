import { Component, Input, AfterViewChecked, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    template: `
        <div #imageTemplate></div>
    `
})

export class GalleryComponent implements AfterViewChecked {
    @ViewChild('imageTemplate', { static: false })
    template: ElementRef;

    @Input()
        public imageSrc: string;

    ngAfterViewChecked(): void {
        if (typeof(this.imageSrc) === 'string') 
            this.template.nativeElement.innerHTML += `<img src="${this.imageSrc}">`
    }
}