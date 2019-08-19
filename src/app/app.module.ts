import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery.component';
import { ImageInputComponent } from './imageInput.component'
import { ImageLoadService } from './imageLoad.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ImageLoadService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }