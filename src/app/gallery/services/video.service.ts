import { Injectable } from '@angular/core';
import {Video} from "../models/video.model";

@Injectable()
export class VideoService {

  private videoUrl: string = "https://www.youtube.com/watch?v=<video-id>";
  private embed: string = "https://www.youtube.com/embed/<video-id>";
  private thumbHQ: string = "https://i.ytimg.com/vi/<video-id>/hqdefault.jpg";

  constructor() { }

  getVideoThumbnailUrl(video: Video): string {

    //https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
    const videoThumbnail = this.thumbHQ.replace('<video-id>',video.id);
    return videoThumbnail;
  }

  getVideoEmbedUrl(video: Video): string {

    //https://www.youtube.com/embed/<insert-youtube-video-id-here>
    const videoEmbed = this.embed.replace('<video-id>',video.id);
    return videoEmbed;
  }

  getVideoUrl(id): string {
    const url = this.videoUrl.replace('<video-id>', id);
    return url;
  }

  getVideoID(url): string {

    let videoID = "NA";
    let extractId = url.split('v=')[1];

    if ( extractId != undefined ) {
      videoID = extractId.split('&')[0];
    }

    return videoID;
  }

}
