import { Component, OnInit } from '@angular/core';
import store from '../store/store';

@Component({
    selector: 'app-counter-component',
    template: `
        <h1>{{count}}</h1>
    `
})

export class CounterComponent implements OnInit {
    public count: number;

    public ngOnInit(): void {
        store.subscribe(
            () => {
                this.count = store.getState().counter;
            }
        )
    }
}