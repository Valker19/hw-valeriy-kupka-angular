import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h4>{{title | morse}}</h4>
    <input type="text" [(ngModel)]='title'>
    <app-clock></app-clock>
    `
})

export class AppComponent {
  public title: string = 'Test)';
}
