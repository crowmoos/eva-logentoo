import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleService {
  articles = [];

  private apiUrl: string;
  private apiByZipCodeUrl: string;
  private reloadEvt: any;
  private subReloadEvt: Observable<any>;

  constructor(private http:Http, @Inject('searchParamsService') private searchParamsService) {
    this.searchParamsService = searchParamsService;
    this.apiUrl = 'http://localhost:3000/articles';
    this.apiByZipCodeUrl = 'http://localhost:3000/articles-post';
    this.http = http;
    this.subReloadEvt = Observable.create(obs =>{
      debugger;
      this.reloadEvt = obs;
    });
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  triggerReloadArticles(): void{
    if (!this.reloadEvt) {
      this.searchParamsService.updateLocalStorage();
      return;
    }
    this.reloadEvt.next('reloading');
  }

  reloadArticlesEvnt(): Observable<any> {
    return this.subReloadEvt.flatMap(value => {
      return this.getArticlesBySearchParams();
    });
  }

  getArticlesBySearchParams(): Observable<any> {
    console.log(this.searchParamsService.getSearchPostParams());
    return this.http.post(this.apiByZipCodeUrl, this.searchParamsService.getSearchPostParams())
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

}
