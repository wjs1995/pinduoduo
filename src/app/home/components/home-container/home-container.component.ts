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
  imageSliders: ImageSlider[] = [
    {
    // tslint:disable-next-line:max-line-length
    imgUrl: 'http://img.zcool.cn/community/01ca3d5543f32f0000019ae985d373.jpg@1280w_1l_2o_100sh.png',
    link: '12312',
    caption: '12312312321'
  },
    {
      // tslint:disable-next-line:max-line-length
      imgUrl: 'http://img.zcool.cn/community/0183f556e8c7f632f875520f4a9cdf.jpg',
      link: '12312',
      caption: '12312312321'
    }, {
      // tslint:disable-next-line:max-line-length
      imgUrl: 'http://www.suntop168.com/blog/zb_users/upload/2014/2/E034CA83.jpg',
      link: '12312',
      caption: '12312312321'
    }
    // http://img.zcool.cn/community/01bbe858ce95e2a801219c772c5e75.jpg@1280w_1l_2o_100sh.jpg
    // http://img.zcool.cn/community/0132c05541bf0d000001e78ccf1258.jpg@1280w_1l_2o_100sh.jpg
    // http://img3.imgtn.bdimg.com/it/u=2125738828,1669408181&fm=26&gp=0.jpg
    // http://img.zcool.cn/community/016b545721c6986ac7253812ecccf8.jpg@1280w_1l_2o_100sh.jpg
    // http://img.zcool.cn/community/01bf8755431b560000019ae9726d67.jpg
    //   http://picapi.zhituad.com/photo/34/07/32BBE.jpg
    // http://picapi.zhituad.com/photo/25/81/73FFA.jpg
    //   http://img2.imgtn.bdimg.com/it/u=3346411134,3689284566&fm=26&gp=0.jpg
    // http://www.suntop168.com/blog/zb_users/upload/2014/2/adf89182.jpg
    //   http://img.zcool.cn/community/01590d55f24c656ac7251df8f4d0c1.jpg
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
