import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.coursesObservable = this.getVideos();
  }
  getVideos(): Observable<any[]> {
    return this.db.list('/videos').valueChanges();
  }

  getVideo(id): Observable<any> {
    return this.db.list('/videos/'+id).valueChanges();
  }
}
