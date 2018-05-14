import { CreateBlogComponent } from './create-blog/create-blog.component';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class AdminServiceService {

  constructor(private _http: Http) { }
  postBlog(post) {
    console.log('blog post');
     const headers = new Headers({ 'Content-Type': 'application/json'});
     const options = new RequestOptions({ headers: headers });

     return this._http.post('/blogapi/addblog', JSON.stringify(post), options)

     .map(result => {

      return result.json();
    });
  }

  getBlog() {
    return this._http.get('/blogapi/getblog').map((result) => {
      return result.json();
    });

  }

  }

