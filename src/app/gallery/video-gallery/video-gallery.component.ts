import { Component, OnInit } from '@angular/core';
import {Video} from "../video.model";
import {DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "./video.service";
import {videosMock} from "../mock-videos";

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  private videos: Video[];
  private itemWidth: number;
  private itemHeight: number;

  constructor(private videoService: VideoService, private sanitizerService: DomSanitizer) { }

  ngOnInit() {
    this.videos = videosMock;
    this.itemWidth = 250;
    this.itemHeight = 250;
    console.log(this.videos);
  }

  getThumbnail(video:Video ) {
    const thumbnail = this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoThumbnailUrl(video));
    return thumbnail;
  }

}
