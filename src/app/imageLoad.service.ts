import { EventEmitter } from '@angular/core';

export class ImageLoadService {
    public imageSrc: EventEmitter<Array<string | Date>> = new EventEmitter<Array<string | Date>>();

    public set setImageSrc(value: string) {
        this.imageSrc.emit([value, new Date()]);
    }
}