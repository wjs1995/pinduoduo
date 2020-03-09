import {Optional} from '@angular/core';

class ClassIndex {
  nameStr: string;

  constructor(@Optional() name: string, public age: number) {
    this.nameStr = name;
  }
}
