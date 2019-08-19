import { Component } from '@angular/core';
import { ImageLoadService } from './imageLoad.service';

@Component({
    selector: 'app-image-input',
    template: `
        <input type="text" (input)='handleInput($event)'>
    `
})

export class ImageInputComponent {
    constructor(private service: ImageLoadService) { }

    public handleInput($event): void {
        this.service.setImageSrc = $event.target.value;
        $event.target.value = '';
    }
}