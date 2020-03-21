import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Confirmable, Emoji} from '../../decorator';
import {HomeService} from '../../service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}
export interface TabItem {
  title: string;
  icon: string;
  link: string;
  selectedIcon: string;
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols = 8;
  @Input() displayCols = 5;
  @Emoji() result = 'hello';
  sliderMargin = '0';

  get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  get templateRows(): string {
    return 'minmax(auto,max-content)';
  }

  get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }

  constructor(private service: HomeService) {
  }

  ngOnInit() {
    setInterval(() => {
      // console.log(this.sliderMargin);
    }, 2000);
  }

  @Confirmable('您确认要执行吗？')
  ok() {
    // console.log(1111);
  }

  handle(ev: any) {
    // console.log(ev, 'width');
    // console.log(ev.target.scrollLeft, 'left');
    this.sliderMargin = `0 ${(100 * ev.target.scrollLeft) / ev.target.scrollWidth}%`;
  }
}
