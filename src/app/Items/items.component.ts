import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Item} from '../common/models/item.model';
import {ItemsService} from '../common/services/items.service';
import {DropdownlistService} from '../common/services/dropdownlist.service';
import {AppStore} from '../common/models/appstore.model';

@Component({
  selector: 'app-item-component',
  templateUrl: 'items.component.html',
  styleUrls: ['items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;
  descriptorsList: Array<{key: number, value: string}>;

  constructor(private itemsService: ItemsService,
              private dropdownlistService: DropdownlistService,
              private store: Store<AppStore>) {
    this.items = itemsService.items;
    this.selectedItem = store.select('selectedItem');
  }

  ngOnInit() {
    this.descriptorsList = this.dropdownlistService.getDesctiptors();
  }

  selectItem(item: Item) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  deleteItem(item: Item) {
    if (confirm('Are you sure you want to delete ' + item.name)) {
      this.itemsService.deleteItem(item);
      this.resetItem();
  }
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', descriptors: null, itemdate: null, description: '', state: false};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  saveItem(item: Item) {
    if (item.state == null) {
      item.state = false;
    }
    this.itemsService.saveItem(item);
    this.resetItem();
  }
}
