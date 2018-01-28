import {Component, Input, OnInit} from '@angular/core';
import {Video} from "../video.model";
import {videoMock} from "../mock-video";
import {DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "../video-gallery/video.service";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {

  @Input() video: Video;
  private thumbnail: any;
  private width: number;
  private height: number;


  constructor(private videoService: VideoService, private sanitizerService: DomSanitizer) { }

  ngOnInit() {
    //this.video = videoMock
    this.thumbnail = this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoThumbnailUrl(this.video));
    this.width = 250;
    this.height = 250;
  }

}
