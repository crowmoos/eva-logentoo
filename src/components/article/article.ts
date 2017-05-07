import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-card',
  templateUrl: 'article.html'
})
export class Article {
  @Input() article: any;
  constructor() {

  }
}
