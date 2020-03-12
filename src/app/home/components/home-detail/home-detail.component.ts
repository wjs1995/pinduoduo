import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ImageSlider} from '../../../shared/components/images-slider';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../../shared/service';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Channel} from '../../../shared/components/horizontal-grid';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  imageSliders$: Observable<ImageSlider[]>;
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

  selected$: Observable<string>;
  channels$: Observable<Channel[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
    ) {
  }

  ngOnInit(): void {
    this.selected$ = this.activatedRoute.paramMap
      .pipe(
        filter(p => p.has('tabLink')),
        map(p => p.get('tabLink'))
      );
    this.cd.markForCheck();
    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
    // this.activatedRoute.queryParamMap.subscribe(params => {
    //   // console.log('查询参数', params)
    // });
  }

}
