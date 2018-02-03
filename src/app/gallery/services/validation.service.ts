import { Injectable } from '@angular/core';
import {VideoDataService} from "./video-data.service";
import {AbstractControl} from "@angular/forms";
import {isUndefined} from "util";
import {database} from "firebase/app";
import {VideoService} from "./video.service";
import {Observable} from "rxjs/Observable";
import {promise} from "selenium-webdriver";
import controlFlow = promise.controlFlow;


@Injectable()
export class ValidationService {

  constructor(private dataService: VideoDataService, private  videoService: VideoService) { }

   VideoAlreadyExist(url): Observable<boolean> {

    let ID = this.videoService.getVideoID(url);

    console.log("video ID : " + ID);

    let alreadyExist: boolean;

    if ( ID != "NA") {

      let video;

      this.dataService.getSingleVideo(ID).subscribe(
        v => {
          video = v;
          if ( video === null ) {
            console.warn("[ValidationService] - Video doesn't exist");
            return Observable.of(false);
          }
        }
      );
    }

    return Observable.of(true);
  }

  static InvalidVideoUrl(control: AbstractControl) {

    if ( control.pristine ) {
      return null;
    }
    
    let videoID = "NA";
    let extractId = control.value.toString().split('v=')[1];
    console.log(extractId);

    if ( extractId != undefined ) {
      videoID = extractId.split('&')[0];
      console.log(videoID);
    } else {
      console.warn("[ValidationService] - Video URL is invalid");
      return { invalidVideoUrl: true};
    }

    return null;
  }


}
