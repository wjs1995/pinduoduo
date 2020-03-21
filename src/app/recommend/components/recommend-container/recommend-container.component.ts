import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Ad, Product} from '../../../shared/domain';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {HomeService} from '../../../shared/service';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css']
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<Ad>;
  product$: Observable<Product[]>;

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.ad$ = this.service.getAdByTab('men')
      .pipe(
        filter(ads => ads.length > 0),
        map(ads => ads[0])
      );


    this.product$ = this.service.getProductsByTab('men');
  }

}
