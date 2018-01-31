import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {VideoGalleryComponent} from "./gallery/components/video-gallery/video-gallery.component";
import {VideoDetailsComponent} from "./gallery/components/video-details/video-details.component";
import {VideoCreationComponent} from "./gallery/components/video-creation/video-creation.component";
import {VideoUpdateComponent} from "./gallery/components/video-update/video-update.component";


const routes: Routes = [
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
  { path: 'videos', component: VideoGalleryComponent },
  { path: 'video',
    children: [
      { path: 'add', component: VideoCreationComponent },
      { path: 'update/:id', component: VideoUpdateComponent },
      { path: ':id', component: VideoDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
