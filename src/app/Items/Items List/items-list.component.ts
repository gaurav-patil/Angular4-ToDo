import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from '../../common/models/item.model';
import {ItemsCountComponent} from '../Items Count/itemsCount.component';
import {OrderBy} from '../../common/sort';

@Component({
  selector: 'app-items-list',
  templateUrl: '../Items List/items-list.component.html',
  styleUrls: ['items-list.component.css']
})

export class ItemsListComponent {
  selectedItemCountRadioButton: string = 'All';
  sortItemRadioButton: String = 'name';
  @Input() items: Item[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  getTotalItemsCount(): number {
    return this.items.length;
  }

  getTotalItemsPending(): number {
    return this.items.filter(e => e.state === false).length;
  }

  getTotalItemsDone(): number {
    return this.items.filter(e => e.state === true).length;
  }

  onItemsCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedItemCountRadioButton = selectedRadioButtonValue;
  }

  onSortRadioButtonChange(selectedRadioButtonValue: string): void {
    this.sortItemRadioButton = selectedRadioButtonValue;
  }
}
