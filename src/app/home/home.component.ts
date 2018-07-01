import { AdminServiceService } from './../admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 blogArray = [];
  constructor(private _adminServiceService: AdminServiceService) { }

  ngOnInit() {
    (<any>$('.carousel')).carousel({
      interval: 5000
    });
    this.retrieveBlog();
  }
  retrieveBlog() {
    this._adminServiceService.getBlog().subscribe(
      res => {
        this.blogArray = res;


      }
    );

  }
}
