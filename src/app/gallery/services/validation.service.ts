import { Injectable } from '@angular/core';
import {VideoDataService} from "./video-data.service";
import {AbstractControl} from "@angular/forms";
import {isUndefined} from "util";
import {database} from "firebase/app";

export class ValidationService {

  constructor(private dataService: VideoDataService) { }

  /*VideoAlreadyExist(control: AbstractControl) {

    console.log("control value : " + control.value.toString());

    let videoID = "NA";
    let extractId = control.value.toString().split('v=')[1];
    console.log(extractId);

    if ( extractId != undefined ) {
      videoID = extractId.split('&')[0];

      let video;

      this.dataService.getSingleVideo(videoID).subscribe(
        v => {
          video = v;
          //if ( video)
        }
      );
    }

    console.log(videoID);

    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
      return { validUrl: true };
    }

    return null;
  }*/

  static InvalidVideoUrl(control: AbstractControl) {

    let videoID = "NA";
    let extractId = control.value.toString().split('v=')[1];
    console.log(extractId);

    if ( extractId != undefined ) {
      videoID = extractId.split('&')[0];
      console.log(videoID);
    } else {
      console.error("[ValidationService] - Video URL is invalid");
      return { invalidVideoUrl: true};
    }

    return null;
  }


}
