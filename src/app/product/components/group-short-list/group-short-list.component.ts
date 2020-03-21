import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GroupOrder} from '../domain';

@Component({
  selector: 'app-group-short-list',
  templateUrl: './group-short-list.component.html',
  styleUrls: ['./group-short-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupShortListComponent implements OnInit {
  @Input() groupOrders: GroupOrder[];
  constructor() { }

  ngOnInit(): void {
    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'zhangsan',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'lisi',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2019, 2, 20, 10, 10, 10),
        remainingNumber: 1
      }
    ];
  }

}
