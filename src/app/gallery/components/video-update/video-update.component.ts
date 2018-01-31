import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../services/validation.service";
import {VideoDataService} from "../../services/video-data.service";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../../services/video.service";
import {Video} from "../../models/video.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-update',
  templateUrl: './video-update.component.html',
  styleUrls: ['./video-update.component.css']
})
export class VideoUpdateComponent implements OnInit {

  constructor(private builder: FormBuilder, private videoService: VideoService, private dataService: VideoDataService, private router: ActivatedRoute, private sanitizerService: DomSanitizer) { }

  private title = new FormControl('');
  private desc = new FormControl('');
  private videoUrl = new FormControl('');

  private videoForm: FormGroup;


  private subscription: any;
  private videoID: string;

  ngOnInit() {

    this.subscription = this.router.params.subscribe(params => {

      const videoId = params['id'];
      console.log("update ID : " + videoId);

      this.dataService.getSingleVideo(videoId).subscribe(
        data => {
          console.log("data");
          this.title = new FormControl(data.title);
          this.desc = new FormControl(data.desc);
          this.videoUrl = new FormControl({value:this.videoService.getVideoUrl(data.id), disabled: true});
          this.videoID = data.id;
        }
      )
    });


    this.videoForm = this.builder.group({
      title: this.title,
      url: this.videoUrl,
      desc: this.desc
    });
  }

  formAction() {

    /*this.dataService.videoExist("VigYS-xl-4s").subscribe( data => {
      console.log(data);
      }
    );*/


    let title = this.title.value.toString();
    console.log("TITRE : " + title);

    let desc = this.desc.value.toString();
    console.log("DESC : " + this.desc);

    let video = new Video(this.videoID, title, desc);

    console.log("Video : " + video.id );

    this.dataService.updateVideoDetail(video.id, video);

  }

}
