import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchParamsService {

  public searchQuery: any;
  private apiAutocomplete: string;

  constructor(private http:Http) {
    this.http = http;
    this.apiAutocomplete = 'http://localhost:3000/zipcode/';
    if(localStorage['searchQuery']) {
      this.searchQuery = JSON.parse(localStorage['searchQuery']);
    }else {
      this.searchQuery = {
        chosenCities: [],
        isPro: true,
        isPerso: true,
        isStudio: true,
        isMaison: true,
        isAppart: true,
        isGarage: true,
        nbrRooms : [],
        price: {
          lower: 200,
          upper: 700
        }
      }
    }
  }

  addCity(city) {
    this.searchQuery.chosenCities.push(city);
  }

  getZipCodeList() {
    return this.searchQuery.chosenCities;
  }

  removeCity(city) {
    this.searchQuery.chosenCities = this.searchQuery.chosenCities.filter(zipCity => {
      return zipCity.zipCode !== city.zipCode;
    });
    return this.searchQuery.chosenCities;
  }

  updateLocalStorage() {
    localStorage.setItem('searchQuery', JSON.stringify(this.searchQuery));
  }

  autocompleteZipCode(searchInput): Observable<any> {
    return Observable.fromEvent(searchInput, 'keyup')
      .map((event: any) => {
          return event.target.value;
      })
      .filter(value => {
        return value.length > 1;
      })
      .debounceTime(750)
      .distinctUntilChanged()
      .switchMap((term:String) => {
        return this.http.get(this.apiAutocomplete + term);
      })
      .map((res:Response) => res.json())
    ;
  }

  getSearchPostParams() {
    this.searchQuery.zipCodes = this.searchQuery.chosenCities.map(city => city.zipCode);
    return this.searchQuery;
  }

}
