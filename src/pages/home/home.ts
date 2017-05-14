import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalContentPage } from '../searchModal/search.modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private articles : Array<any>;

  constructor(
    @Inject('InAppBrowser') private iab,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    @Inject('articleService') private articleService
  ) {
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

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}
