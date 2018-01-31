import { Component, OnInit } from '@angular/core';
import {Video} from '../../models/video.model';
import {videoMock} from "../../models/mock-video";
import {VideoService} from "../../services/video.service";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {VideoDataService} from "../../services/video-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  private video: Video;
  private embed: any;
  private subscription: any;

  constructor(private videoService: VideoService, private dataService: VideoDataService, private router: ActivatedRoute,private sanitizerService: DomSanitizer) { }

  ngOnInit() {

    this.subscription = this.router.params.subscribe(params => {
      const videoId = params['id'];
      this.dataService.getSingleVideo(videoId).subscribe(
        data => {
          this.video = data;
          this.embed = this.getEmbed();
        }

      );
      //this.embed = this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoEmbedUrl(this.video));
    });
  }

  getEmbed() {
    return this.sanitizerService.bypassSecurityTrustResourceUrl(this.videoService.getVideoEmbedUrl(this.video));
  }

  embedUrl() {
    this.embed = this.sanitizerService.bypassSecurityTrustResourceUrl(this.embed);
  }

}
