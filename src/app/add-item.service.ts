import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class AddItemService {

  constructor(private _http: Http) { }
  postItem(post) {
    console.log('item post');
     const headers = new Headers({ 'Content-Type': 'application/json'});
     const options = new RequestOptions({ headers: headers });

     return this._http.post('/itemapi/additem', JSON.stringify(post), options)

     .map(result => {

      return result.json();
    });
  }
}
