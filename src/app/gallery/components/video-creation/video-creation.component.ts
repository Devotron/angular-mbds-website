import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {VideoDataService} from "../../services/video-data.service";
import {ValidationService} from "../../services/validation.service";
import {Video} from "../../models/video.model";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'app-video-creation',
  templateUrl: './video-creation.component.html',
  styleUrls: ['./video-creation.component.css']
})
export class VideoCreationComponent implements OnInit {

  constructor(private builder: FormBuilder, private dataService: VideoDataService, private videoService: VideoService) { }

  private title = new FormControl('', Validators.required);
  private desc = new FormControl('');
  private videoUrl = new FormControl('', [Validators.required, ValidationService.InvalidVideoUrl]);

  private videoForm: FormGroup;


  ngOnInit() {
    this.videoForm = this.builder.group({
      title: this.title,
      url: this.videoUrl,
      desc: this.desc
    });
  }

  formAction() {

    let id = this.videoService.getVideoID(this.videoForm.controls.url.value.toString());
    let title = this.videoForm.controls.title.value.toString();
    let desc = this.videoForm.controls.desc.value.toString();

    let video = new Video(id, title, desc);

    console.log("Video : " + video.id );

    this.dataService.addVideo(video);

  }



}
