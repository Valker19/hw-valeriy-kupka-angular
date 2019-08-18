import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  CounterComponent,
  DecrementComponent,
  IncrementComponent,
  ResetComponent
} from './components'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DecrementComponent,
    IncrementComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }