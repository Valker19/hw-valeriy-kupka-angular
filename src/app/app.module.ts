// Angular additions
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
// Components
import { AppComponent } from './app.component';
import {
  GalleryComponent,
  ImageCardComponent,
  AddPublicationComponent
} from './components';
import { GalleryService } from './services/gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageCardComponent,
    AddPublicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [
    GalleryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }