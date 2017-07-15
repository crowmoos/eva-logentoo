import { Component, Input, Inject } from '@angular/core';


@Component({
  selector: 'article-card',
  templateUrl: 'article.html'
})
export class Article {
  @Input() article: any;
  constructor(@Inject('InAppBrowser') private iab) {
    this.iab = iab;
  }

  gotoLink(link) {
    console.log("dsqdsdsq")
    this.iab.create(link, '_self', 'location=yes');
  }
}
