import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-counter-component></app-counter-component>
      <app-decrement-component></app-decrement-component>
      <app-increment-component></app-increment-component>
      <app-reset-component></app-reset-component>
    </div>
    `
})

export class AppComponent { }