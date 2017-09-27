import {Injectable} from '@angular/core';

@Injectable()
export class DropdownlistService {
  descriptors = [
    {
      key: 1,
      value: 'Home'
    },
    {
      key: 2,
      value: 'Office'
    },
    {
      key: 3,
      value: 'Family'
    }
  ];
  getDesctiptors() {
    return this.descriptors;
  }
}

