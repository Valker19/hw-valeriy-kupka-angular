import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions'

@Component({
    selector: 'app-decrement-component',
    template: `
        <button (click)="handler()">{{text}}</button>
    `
})

export class DecrementComponent {
    public text: string = '-';
    public payload: number = 1;

    public handler(): void {
        store.dispatch({ type: actions.DECREMENT, payload: this.payload });
    }
}