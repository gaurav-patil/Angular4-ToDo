import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-items-count',
  templateUrl: '../Items Count/itemsCount.component.html',
  styleUrls: ['itemsCount.component.css']
})

export class ItemsCountComponent {
  selectedRadioButtonValue: String = 'All';
  selectedSortValue: String = 'name';
  @Output()
  RadioButtonSelectionChanged: EventEmitter<String> = new EventEmitter<String>();
  @Output()
  SortButtonSelectionChanged: EventEmitter<String> = new EventEmitter<String>();
  @Input()
  all: number;
  @Input()
  done: number;
  @Input()
  pending: number;

  onRadioButtonSelectionChange() {
    this.RadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

  onSortButtonSelectionChange() {
    this.SortButtonSelectionChanged.emit(this.selectedSortValue);
  }


}
