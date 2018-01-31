import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {timer} from "rxjs/observable/timer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  videos: Observable<any[]>;
  video: Observable<any>;
  itemRef: AngularFireObject<any>;
  show: boolean = true;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.videos = this.getVideos();
    //this.video = this.getVideo("QR4LVy72uzQ");
    //console.log(this.video);

    this.itemRef = this.db.object('/videos/QR4LVy72uzQ');
    this.itemRef.snapshotChanges().subscribe(action => {
      console.log("[1]" + action.type);
      console.log("[2]" + action.key);
      console.log("[3]" +  action.payload.child("title").val());
    });
  }
  getVideos(): Observable<any[]> {
    return this.db.list('/videos').valueChanges();
  }

  getVideo(id): Observable<any> {
    return this.db.object(id).valueChanges();
  }
}
