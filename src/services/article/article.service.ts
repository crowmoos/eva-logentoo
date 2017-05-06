import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class ArticleService {
  articles = [];
  private apiUrl : string;
  constructor(private http:Http) {
    this.apiUrl = 'http://192.168.43.199:3000/articles';
    this.http = http;
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    ;
  }

}
