import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { LoadImagesService } from './loadImages.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
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