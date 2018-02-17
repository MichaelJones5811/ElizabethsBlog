import { AdminServiceService } from './../admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private _adminServiceService: AdminServiceService) { }
  serverMessage = '';
  ngOnInit() {
  }
  onSubmit(f){
    this._adminServiceService.postBlog(f.value)
    .subscribe(info => {
      if (info.message) {
        this.serverMessage = info.message;
      }
}
    )}
}
