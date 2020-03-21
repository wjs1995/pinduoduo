import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageSlider, ImagesSliderComponent} from '../../../shared/components/images-slider';
import {TabsHeaderType} from '../../../shared/components/scrollable-tab';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Dao} from '../../../shared/service/browser-storage.service';
import {HomeService} from '../../../shared/service';
import {filter, map, tap} from 'rxjs/operators';
import {Channel} from '../../../shared/components/horizontal-grid';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  @ViewChild('imagesSlider', {static: true}) imagesSlider: ImagesSliderComponent;
  @ViewChild('storageRef', {static: true}) storageRef: ElementRef;
  tabMenus: TabsHeaderType[] = [];
  title = '123123';
  dao = new Dao();
  channels: Observable<Channel[]>;
  selectedTabLink$: Observable<string>;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private active: ActivatedRoute) {
  }

  handleTabSelected(tobMenu: TabsHeaderType) {
    console.log('tobMenu', tobMenu);
    this.router.navigate(['home', tobMenu.link]);
  }

  ngOnInit() {
    this.selectedTabLink$ = this.active.firstChild.paramMap.pipe(
      filter(f => f.has('tabLink')),
      map(m => m.get('tabLink'))
    )
    this.homeService.getTabs()
      .subscribe(p => {
        this.tabMenus = p;
        console.log(p);
      });
    this.channels = this.homeService.getChannels().pipe(
      tap(p => console.log(p))
    );
  }

}
