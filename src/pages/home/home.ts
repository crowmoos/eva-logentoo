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
    this.articles = articleService.articles;
  }

  gotoLink(link) {
    this.iab.create(link, '_self', 'location=yes');
  }

}
