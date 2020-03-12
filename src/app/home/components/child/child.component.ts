import {AfterViewChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  _title: string;
  get title() {
    console.log('脏值检测');
    return this._title;
  }

  constructor(private ngZone: NgZone, private rd2: Renderer2) {
    this._title = 'hi';
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this._title = '哈';
        this.rd2.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans')
        )
        // this.timeRef.nativeElement.innerText = Date.now();
      }, 100);
    });
  }

  handle() {

  }
}
