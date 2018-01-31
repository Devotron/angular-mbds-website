import { Component, OnInit } from '@angular/core';
import {Video} from "../../models/video.model";
import {DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "../../services/video.service";
import {videosMock} from "../../models/mock-videos";
import {VideoDataService} from "../../services/video-data.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  private videos: Observable<Video[]>;
  private itemWidth: number;
  private itemHeight: number;

  private spinner: boolean = true;

  constructor(private videoService: VideoService, private router: ActivatedRoute, private dataService: VideoDataService, private sanitizerService: DomSanitizer) { }

  ngOnInit() {
    this.itemWidth = 210;
    this.itemHeight = 118;

    this.videos = this.dataService.getVideoList();

    this.videos.subscribe(data => {
      this.spinner = false
    });

    let id = "w8m6Jg9Y7X0";
    //let vid = new Video('w8m6Jg9Y7X0', 'Critique d\'Aliens la saga', 'Second opus de la trilogie Alien ...');
    //this.dataService.updateVideoDetail(id, vid);
  }

  getThumbnail(video:Video ) {
    const thumbnail = this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoThumbnailUrl(video));
    return thumbnail;
  }

  removeVideo(id) {
    this.dataService.removeVideo(id);
  }
}
