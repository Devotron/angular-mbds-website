import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {VideoDataService} from "../../services/video-data.service";
import {ValidationService} from "../../services/validation.service";
import {Video} from "../../models/video.model";
import {VideoService} from "../../services/video.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-video-creation',
  templateUrl: './video-creation.component.html',
  styleUrls: ['./video-creation.component.css']
})
export class VideoCreationComponent implements OnInit {

  constructor(private builder: FormBuilder, private dataService: VideoDataService, private videoService: VideoService, private validationService: ValidationService) { }

  private title = new FormControl('', Validators.required);
  private desc = new FormControl('');
  private videoUrl = new FormControl('', [Validators.required, ValidationService.InvalidVideoUrl]);

  private videoForm: FormGroup;

  private validForm = true;
  private videoExist = true;

  ngOnInit() {
    this.videoForm = this.builder.group({
      title: this.title,
      url: this.videoUrl,
      desc: this.desc
    });
  }

  formAction() {

    if ( !this.videoExist && !this.videoUrl.getError('invalidVideoUrl') ) {

      let id = this.videoService.getVideoID(this.videoForm.controls.url.value.toString());
      let title = this.videoForm.controls.title.value.toString();
      let desc = this.videoForm.controls.desc.value.toString();

      let video = new Video(id, title, desc);

      console.log("Video : " + video.id );

      this.dataService.addVideo(video);

    } else {

      this.validForm = false;

    }

  }

  validateVideoAlreadyExist() {

    this.dataService.getSingleVideo(this.videoService.getVideoID(this.videoUrl.value.toString())).subscribe(res => {
      if ( res === null ) {
        console.warn("[ValidationService] - Video doesn't exist");
        this.videoExist = false;
        this.validForm = true;
        console.warn("1. exist : "  + this.videoExist);
        console.warn("1. condition : " + this.videoExist && this.videoUrl.pristine);
      } else {
        console.warn("[ValidationService] - Video exist");
        console.warn(res.title);
        this.videoExist = true;
        console.warn("2. exist : "  + this.videoExist);
        console.warn("2. condition : " + this.videoExist && this.videoUrl.pristine);
      }
    });

  }

}
