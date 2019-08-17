import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    template: `
        <h5>{{time | date: 'medium'}}</h5>
    `
})

export class ClockComponent implements OnInit {
    public time: Date;

    ngOnInit(): void {
        setInterval(() => {
            this.time = new Date();  
        }, 100);
    }
}