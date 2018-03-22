import { ConfessionComponent } from './../confession/confession.component';
import { Component, OnInit } from '@angular/core';
import { JeremiahComponent } from '../jeremiah/jeremiah.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  articleArr = ['Confession', 'Jeremiah', '3', '4', '5'];


  constructor() { }

  ngOnInit() {}




  }

