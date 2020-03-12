import {ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Channel} from '../horizontal-grid';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, DoCheck {
  @Input() selectIndex = 0;
  @Output() selected = new EventEmitter();
  tabList: Channel[] = [
    {id: 1, title: '首页', icon: '1', link: 'home'},
    {id: 1, title: '推荐', icon: '1', link: 'recommend'},
    {id: 1, title: '分类', icon: '1', link: 'category'},
    {id: 1, title: '聊天', icon: '1', link: 'chat'},
    {id: 1, title: '个人中心', icon: '1', link: 'my'},
  ];
  color: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.selectIndex)
  }


  change(i: number) {
    this.selected.emit(this.tabList[i]);
  }

  ngDoCheck(): void {
    console.log(this.selectIndex)
  }
}
