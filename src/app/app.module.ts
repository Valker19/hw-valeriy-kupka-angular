import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { SelectedImgComponent } from './selectedImage.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SelectedImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
