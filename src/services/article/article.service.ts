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

  constructor(private http:Http, @Inject('searchParamsService') private searchParamsService) {
    this.searchParamsService = searchParamsService;
    this.apiUrl = 'http://localhost:3000/articles';
    this.apiByZipCodeUrl = 'http://localhost:3000/articles-post';
    this.http = http;
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

  getArticlesBySearchParams(): Observable<any> {
    return this.http.post(this.apiByZipCodeUrl, this.searchParamsService.getSearchPostParams())
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

}
