import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ImageSlider, ImagesSliderComponent, TabsHeaderType} from './shared/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }
}
