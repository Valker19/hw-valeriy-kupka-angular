import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html'
})

export class GalleryComponent implements AfterViewInit {
    @ViewChild('btn', { static: false })
    btn: ElementRef;

    imgSrc: string = 'https://s.0564.ua/section/cataloglogo/upload/images/catalog/000/001/260/bez-nazvania_5c53e1f6845c0.jpg';
    buttonText: string = 'Click!';

    // and you must change life cycle hook, because reference to the element will appear only when the dom is raised 
    ngAfterViewInit(): void {
        this.buttonClick();
    }

    buttonClick(): void {
        // or you can do the same with the viewchild decorator
        // sure it should be better, if we talk about angular application
        const publisher = fromEvent(this.btn.nativeElement, 'click')
            .pipe(bufferCount(4));

        // dont't forget call unsubscribe method of the subscriber on ondestroy hook
        // but in this case it's not necessary
        const subscriber = publisher.subscribe(() => {
            alert('Button pressed 4 times');
        })
    }
}