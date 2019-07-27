import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
        <img src="{{imgSrc}}">
        <img src="{{imgSrc}}">
        <img src="{{imgSrc}}">
    `
})
export class AppComponent {
    imgSrc: string = 'https://s.0564.ua/section/cataloglogo/upload/images/catalog/000/001/260/bez-nazvania_5c53e1f6845c0.jpg'
}