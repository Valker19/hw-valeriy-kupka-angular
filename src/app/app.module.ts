import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadImagesService } from './loadImages.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoadImagesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }