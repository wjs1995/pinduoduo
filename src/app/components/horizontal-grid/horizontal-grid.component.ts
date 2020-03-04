import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Confirmable, Emoji} from '../../shared/decorator';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalGridComponent implements OnInit {
  @Emoji() result = 'hello';
  list: { key: string; value: string; title: string; }[] = [
    {
      key: '1',
      value: '2',
      title: '3'
    },
    {
      key: '1',
      value: '2',
      title: '3'
    },
    {
      key: '1',
      value: '2',
      title: '3'
    }, {
      key: '1',
      value: '2',
      title: '3'
    },
    {
      key: '1',
      value: '2',
      title: '3'
    },

  ];

  constructor() {
  }

  ngOnInit() {
  }

  @Confirmable('您确认要执行吗？')
  ok() {
    console.log(1111);
  }
}
