import { Injectable } from '@angular/core';
import {Video} from "../video.model";

@Injectable()
export class VideoService {

  private thumb: string = "https://img.youtube.com/vi/<video-id>/0.jpg";
  private embed: string = "https://www.youtube.com/embed/<video-id>";

  constructor() { }

  getVideoThumbnailUrl(video: Video): string {

    //https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
    const videoThumbnail = this.thumb.replace('<video-id>',video.id);
    return videoThumbnail;
  }

  getVideoEmbedUrl(video: Video): string {

    //https://www.youtube.com/embed/<insert-youtube-video-id-here>
    const videoEmbed = this.embed.replace('<video-id>',video.id);
    return videoEmbed;
  }

}
