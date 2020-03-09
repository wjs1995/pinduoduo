import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageSlider, ImagesSliderComponent} from '../../../shared/components/images-slider';
import {TabsHeaderType} from '../../../shared/components/scrollable-tab';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild('imagesSlider', {static: true}) imagesSlider: ImagesSliderComponent;
  @ViewChild('storageRef', {static: true}) storageRef: ElementRef;
  tabMenus: TabsHeaderType[] = [
    {title: '热门', href: 'hot', id: 1},
    {title: '男装', href: 'men', id: 2},
    {title: '百货', href: '2', id: 3},
    {title: '运动', href: 'sports', id: 4},
    {title: '手机', href: 'mobile', id: 5},
    {title: '家纺', href: 'textile', id: 6},
    {title: '食品', href: 'food', id: 7},
    {title: '电器', href: '2', id: 8},
    {title: '鞋包', href: '2', id: 9},
    {title: '汽车', href: '2', id: 10},
    {title: '水果', href: '2', id: 11},
    {title: '电脑', href: '2', id: 12},
    {title: '内衣', href: '2', id: 13},
    {title: '家装', href: '2', id: 14},
    {title: '母婴', href: '2', id: 15},
    {title: '美妆', href: '2', id: 16},
    {title: '家具', href: '2', id: 17},
  ];
  title = '123123';

  constructor(private router: Router) {
  }

  handleTabSelected(tobMenu: TabsHeaderType) {
    console.log('tobMenu', tobMenu)
    this.router.navigate(['home', tobMenu.href])
  }

  ngOnInit() {
  }

}
