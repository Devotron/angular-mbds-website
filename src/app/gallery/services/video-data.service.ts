import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {Video} from "../models/video.model";
import {Router} from "@angular/router";

@Injectable()
export class VideoDataService {

  constructor(private database: AngularFireDatabase, private router: Router) { }

  getVideoList(): Observable<any[]> {
    return this.database.list('/videos').valueChanges();
  }

  getSingleVideo(id): Observable<any> {
    return this.database.object('/videos/'+id).valueChanges();
  }

  updateVideoDetail(id, data: Video) {
    const itemRef = this.database.object('/videos/'+id).update(data);
    this.router.navigate(['/videos']);
  }

  addVideo(data: Video) {
    const itemRef = this.database.object('/videos/'+data.id).set(data);
    this.router.navigate(['/videos']);
  }

  removeVideo(id) {
    const itemRef = this.database.object('/videos/'+id).remove();
  }

  /*videoExist(id): Observable<any> {

    this.getSingleVideo(id).subscribe(data=> {

      let video = data;

      if ( video != null ) {
        return true;
      } else return false;

    });

  }*/



}
