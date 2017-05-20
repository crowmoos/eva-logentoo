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
  ) {
    this.autoCompleteCities = [];
    this.chosenCities = searchParamsService.getZipCodeList();
    this.searchCity = '';
    this.searchParamsService = searchParamsService;
  }

  ngAfterViewInit() {
    this.searchParamsService.autocompleteZipCode(document.getElementById('search-input'))
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
    }
    this.autoCompleteCities = [];
    this.searchCity = '';
    // TODO: set auto focus
  }

  removeCity(city) {
    this.chosenCities = this.searchParamsService.removeCity(city);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
