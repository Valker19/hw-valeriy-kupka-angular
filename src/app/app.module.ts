import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateInfoComponent } from './date.component';
import { MorsePipe } from './morse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateInfoComponent,
    MorsePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }