export class Video {

  id: string;
  title: string;
  description: string;
  url: string;

  constructor(title: string, desc: string, url: string) {
    this.title = title;
    this.description = desc;
    this.url = url;
    this.id = url.split('=')[1];
  }

}
