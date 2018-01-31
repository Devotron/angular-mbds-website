export class Video {

  id: string;
  title: string;
  desc: string;

  constructor(id: string, title: string, desc: string) {
    this.title = title;
    this.desc = desc;
    this.id = id;
    //this.id = url.split('=')[1];
  }

}
