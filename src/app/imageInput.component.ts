import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-input',
    template: `
        <input type="text" (input)='handleInput($event)'>
    `
})

export class ImageInputComponent {
    @Output()
    public imageSrc = new EventEmitter<string>();
    
    public handleInput($event): void {
        this.imageSrc.emit($event.target.value)
        $event.target.value = '';
    }
}