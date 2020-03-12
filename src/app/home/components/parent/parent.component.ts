import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', {static: true}) inputRef: ElementRef;
  startDate = new Date(2020, 3, 12,17, 38, 40);
  futureDate = new Date(2020, 3, 12, 17,39, 20);

  constructor() {
  }

  ngOnInit(): void {
    fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe(p => {
        console.log('流', p);
      });
  }

}
