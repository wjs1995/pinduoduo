import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageSlider, ImagesSliderComponent} from '../../../shared/components/images-slider';
import {TabsHeaderType} from '../../../shared/components/scrollable-tab';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {Dao} from '../../../shared/service/browser-storage.service';
import {HomeService} from '../../../shared/service';

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

  constructor(
    private router: Router,
    private homeService: HomeService) {
  }

  handleTabSelected(tobMenu: TabsHeaderType) {
    console.log('tobMenu', tobMenu);
    this.router.navigate(['home', tobMenu.link]);
  }

  ngOnInit() {
    this.homeService.getTabs().subscribe(p => {
     this.tabMenus = p;
     console.log(p)
    })
  }

}
