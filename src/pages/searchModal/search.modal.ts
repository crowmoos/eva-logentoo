import { Component, Inject } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html'
})
export class ModalContentPage {
  private dualValue:any;
  private maison:boolean;
  private appart:boolean;
  private searchCity: String;
  private autoCompleteCities: Array<any>;
  private chosenCities: Array<any>;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    @Inject('articleService') private articleService,
  ) {
    this.autoCompleteCities = [];
    this.chosenCities = [];
    this.dualValue = {lower :200, upper: 700}
    this.maison = true;
    this.searchCity = '';
    this.articleService = articleService;
    this.appart = true;
  }

  ngAfterViewInit() {
    this.articleService.autocompleteZipCode(document.getElementById('search-input'))
      .subscribe(cities => {
        this.autoCompleteCities = cities;
        console.log(cities);
      })
    ;
    console.log('finish init');
  }

  citySelected(city) {
    if(this.chosenCities.filter(elm => elm.zipCode === city.zipCode).length === 0) {
      this.chosenCities.push(city);
    }
    this.autoCompleteCities = [];
    this.searchCity = '';
    // TODO: set auto focus
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
