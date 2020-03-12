import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date();
  @Input() futureDate: Date;
  countDown$: Observable<string>;
  private MS_PER_SECOND = 1000;

  constructor() {
  }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate)
  }
  private getCountDownObservable(start: Date, future: Date): Observable<string> {
    return interval(1000)
      .pipe(
        map(elapse => this.diffInSec(this.startDate, this.futureDate) - elapse),
        tap(p => console.log(p)),
        takeWhile(gap => gap >= 0),
        map(sec => (
          {
            day: Math.floor(sec / 3600 / 24),
            hour: Math.floor((sec / 3600) % 24),
            minute: Math.floor((sec / 60) % 60),
            second: Math.floor((sec % 60))
          }
        )),
        map(({day, hour, minute, second}) => `${day}:${hour}:${minute}:${second}`)
      );
  }

  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime();
    return Math.floor(diff / this.MS_PER_SECOND);
  };

}
