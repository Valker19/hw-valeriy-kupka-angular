import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-input',
    template: `
        <input type="text" (input)='handleInput($event)'>
    `
})

export class ImageInputComponent {
    @Output()
    private imageSrc = new EventEmitter<string>();
    
    public handleInput($event: Event): void {
        const target = $event.target as HTMLInputElement;
        this.imageSrc.emit(target.value)
        target.value = '';
    }
}