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
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    @Inject('articleService') private articleService,
    @Inject('searchParamsService') private searchParamsService,
  ) {
    this.articleService = articleService;
    this.searchParamsService = searchParamsService;
    this.articleService.reloadArticlesEvnt()
      .subscribe(articles => {
        this.articles = articles;
        this.searchParamsService.updateLocalStorage();
      })
    ;
    this.articleService.triggerReloadArticles();
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
    modal.onDidDismiss(data => {
      this.articleService.triggerReloadArticles();
    });
  }

  triggerSort() {
    this.selectsort.open();
  }
}
