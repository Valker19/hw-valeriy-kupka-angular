import { Component } from '@angular/core';
import store from '../store/store';
import actions from '../store/actions'

@Component({
    selector: 'app-reset-component',
    template: `
        <button (click)="handler()">{{text}}</button>
    `
})

export class ResetComponent {
    public text: string = 'reset';

    public handler(): void {
        store.dispatch({ type: actions.RESET });
    }
}