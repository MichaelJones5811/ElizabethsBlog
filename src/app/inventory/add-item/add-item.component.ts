import { AddItemService } from './../../add-item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private _additemService: AddItemService) { }
   serverMessage = '';
   ngOnInit() {
   }
  onSubmit(f) {
    this._additemService.postItem(f.value).subscribe(info => {
      if (info.message) {
        this.serverMessage = info.message;
      }

    });
 }

}
