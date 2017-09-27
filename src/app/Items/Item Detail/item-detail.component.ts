import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Item} from '../../common/models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
  originalName: string;
  selectedItem: Item;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input () descriptorList: Array<{key: number, value: string}>;
  @Input() set item(value: Item){
    if (value) {
      this.originalName = value.name;
    }
    this.selectedItem = Object.assign({}, value);
    console.log(this.selectedItem);
  }
  ngOnInit() {
    // console.log('In detail component' + this.descriptorList);
  }
}
