import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h4>{{title | morse}}</h4>
    <input type="text" [(ngModel)]='title'>
    <app-date-info (dateNow)='handleDate($event)'></app-date-info>
    <h5>{{time | date: 'medium'}}</h5>
  `
})

export class AppComponent {
  public title: string = 'Test)';
  public time: Date;

  public handleDate($event): void {
    this.time = $event;
  }
}
