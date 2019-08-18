import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions'

@Component({
    selector: 'app-increment-component',
    template: `
        <button (click)="handler()">{{text}}</button>
    `
})

export class IncrementComponent {
    public text: string = '+';
    public payload: number = 1;

    public handler(): void {
        store.dispatch({ type: actions.INCREMENT, payload: this.payload });
    }
}