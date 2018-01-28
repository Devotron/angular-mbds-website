import { Component, OnInit } from '@angular/core';
import {Video} from '../video.model';
import {videoMock} from "../mock-video";
import {VideoService} from "../video-gallery/video.service";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  private video: Video;
  private embed: any;

  constructor(private videoService: VideoService, private sanitizerService: DomSanitizer) { }

  ngOnInit() {
    this.video = videoMock
    this.embed = this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoEmbedUrl(this.video));
  }

  embedUrl() {
    this.embed = this.sanitizerService.bypassSecurityTrustResourceUrl(this.embed);
  }

}
