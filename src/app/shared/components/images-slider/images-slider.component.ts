import {Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2, OnDestroy} from '@angular/core';

export interface ImageSlider {
  id?: number,
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() sliderSecond = 2;
  @ViewChild('imageSlider', {static: true}) imageSlider: ElementRef;
  @ViewChildren('img') images: QueryList<ElementRef>;
  selectedIndex = 0;
  intervalId = null;

  constructor(private rd2: Renderer2) {
  }

  ngOnInit() {

    // console.log(this.imageSlider);
  }

  ngAfterViewInit(): void {
    // if (this.intervalId <= 0) {
    //   return
    // }
    // console.log('ngAfterViewInit', this.images);
    this.images.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    });
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth / this.sliders.length));
    }, this.sliderSecond * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : ((this.sliders.length - Math.abs(idx)) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
