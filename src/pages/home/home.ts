import { Component, Inject, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Select } from 'ionic-angular';
import { ModalContentPage } from '../searchModal/search.modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('selectsort') selectsort:Select;
  private articles : Array<any>;

  constructor(
    @Inject('InAppBrowser') private iab,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    @Inject('articleService') private articleService,
    @Inject('searchParamsService') private searchParamsService,
  ) {
    this.iab = iab;
    this.articleService = articleService;
    this.searchParamsService = searchParamsService;
    this.reloadArticles();
  }

  reloadArticles() {
    this.articleService.getArticlesBySearchParams()
      .subscribe(articles => {
        this.articles = articles;
      })
    ;
  }

  gotoLink(link) {
    this.iab.create(link, '_self', 'location=yes');
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
    modal.onDidDismiss(data => {
      this.searchParamsService.updateLocalStorage();
      this.reloadArticles();
    });
  }

  triggerSort() {
    this.selectsort.open();
  }
}
