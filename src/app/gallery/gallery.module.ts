import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { VideoService } from './video-gallery/video.service';
import { VideoDetailsComponent } from './video-details/video-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { VideoItemComponent } from './video-item/video-item.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    MatDialogModule
  ],
  declarations: [VideoGalleryComponent, VideoDetailsComponent, VideoItemComponent],
  providers: [VideoService],
  exports:[
    VideoDetailsComponent,
    VideoItemComponent,
    VideoGalleryComponent
  ],
})
export class GalleryModule { }
