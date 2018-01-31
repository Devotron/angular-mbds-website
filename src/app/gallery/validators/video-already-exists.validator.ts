import {AbstractControl, ValidatorFn} from '@angular/forms';
import {VideoDataService} from "../services/video-data.service";

export function VideoAlreadyExist(control: AbstractControl, dataService: VideoDataService) {

  console.log("control value : " + control.value.toString());



  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { validUrl: true };
  }

  return null;
}
