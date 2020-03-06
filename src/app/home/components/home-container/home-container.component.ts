import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageSlider, ImagesSliderComponent} from '../../../shared/components/images-slider';
import {TabsHeaderType} from '../../../shared/components/scrollable-tab';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild('imagesSlider', {static: true}) imagesSlider: ImagesSliderComponent;
  @ViewChild('storageRef', {static: true}) storageRef: ElementRef;
  tabMenus: TabsHeaderType[] = [
    {title: '热门', href: '1'},
    {title: '男装', href: '2'},
    {title: '百货', href: '2'},
    {title: '运动', href: '2'},
    {title: '手机', href: '2'},
    {title: '家纺', href: '2'},
    {title: '食品', href: '2'},
    {title: '电器', href: '2'},
    {title: '鞋包', href: '2'},
    {title: '汽车', href: '2'},
    {title: '水果', href: '2'},
    {title: '电脑', href: '2'},
    {title: '内衣', href: '2'},
    {title: '家装', href: '2'},
    {title: '母婴', href: '2'},
    {title: '美妆', href: '2'},
    {title: '家具', href: '2'},
  ];
  title = '123123';

  handleTabSelected($event) {
    console.log($event);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
