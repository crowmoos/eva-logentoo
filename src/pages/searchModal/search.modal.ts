import { Component, Inject } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html'
})
export class ModalContentPage {
  private searchCity: String;
  private autoCompleteCities: Array<any>;
  private chosenCities: Array<any>;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    @Inject('searchParamsService') private searchParamsService,
    @Inject('articleService') private articleService
  ) {
    this.autoCompleteCities = [];
    this.chosenCities = searchParamsService.getZipCodeList();
    this.searchCity = '';
    this.searchParamsService = searchParamsService;
    this.articleService = articleService;
  }

  ngAfterViewInit() {
    this.searchParamsService.autocompleteZipCode(document.getElementsByClassName('card-searchbar'))
      .subscribe(cities => {
        this.autoCompleteCities = cities;
        console.log(cities);
      })
    ;
    console.log('finish init');
  }

  citySelected(city) {
    if(this.chosenCities.filter(elm => elm.zipCode === city.zipCode).length === 0) {
      this.searchParamsService.addCity(city);
      this.articleService.triggerReloadArticles();
    }
    this.autoCompleteCities = [];
    this.searchCity = '';
    // TODO: set auto focus
    console.log('selcted', city)
  }

  removeCity(city) {
    this.chosenCities = this.searchParamsService.removeCity(city);
    this.articleService.triggerReloadArticles();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
