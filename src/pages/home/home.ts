import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private articles : Array<any>;

  constructor(@Inject('InAppBrowser') private iab, public navCtrl: NavController, @Inject('articleService') private articleService) {
    this.iab = iab;
    articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
        console.log(articles[0]);
      })
    ;
  }

  gotoLink(link) {
    this.iab.create(link, '_self', 'location=yes');
  }

}
