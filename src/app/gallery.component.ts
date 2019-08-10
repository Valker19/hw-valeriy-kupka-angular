import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html'
})

export class GalleryComponent implements OnInit {
    imgSrc: string = 'https://s.0564.ua/section/cataloglogo/upload/images/catalog/000/001/260/bez-nazvania_5c53e1f6845c0.jpg';
    buttonText: string = 'Click!';

    constructor() { }

    buttonClick(): void {
        const publisher = fromEvent(document.querySelector('button'), 'click')
            .pipe(bufferCount(4));

        const subscriber = publisher.subscribe(() => {
            alert('Button pressed 4 times');
        })
    }

    ngOnInit() {
        this.buttonClick();
    }
}