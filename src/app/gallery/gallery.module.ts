import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGalleryComponent } from './components/video-gallery/video-gallery.component';
import { VideoService } from './services/video.service';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {MatDialogModule} from '@angular/material/dialog';
import { VideoDataService } from './services/video-data.service';
import {RouterModule} from "@angular/router";
import { VideoCreationComponent } from './components/video-creation/video-creation.component';
import { ValidationService } from './services/validation.service';
import { VideoUpdateComponent } from './components/video-update/video-update.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MaterialModule,
    MatDialogModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [VideoGalleryComponent, VideoDetailsComponent, VideoCreationComponent, VideoUpdateComponent],
  providers: [VideoService, VideoDataService, ValidationService],
  exports:[
    VideoDetailsComponent,
    VideoGalleryComponent
  ],
})
export class GalleryModule { }
