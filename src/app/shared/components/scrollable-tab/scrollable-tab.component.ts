import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TabsHeaderType {
  title?: string;
  link?: string;
  id?: number;
}

type Func = (x?: number, y?: number) => number

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {
  @Input() backGroundColor = '#ffffff';
  @Input() menus: TabsHeaderType[] = [];
  @Output() tabSelected = new EventEmitter();
  selected = -1;

  object: { [key: number]: string } = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  constructor() {
    // console.log(this.map);
  }

  ngOnInit() {
    // console.log(this.menus);
  }

  handleSelection(index: number) {
    this.selected = index;
    this.tabSelected.emit(this.menus[index]);
    // console.log(index);
  }

  // addFunc: Func = (x, y) => x + y
}
