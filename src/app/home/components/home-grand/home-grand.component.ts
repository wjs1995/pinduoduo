import {Component, Inject, Injectable, InjectionToken, Injector, OnInit, Optional} from '@angular/core';
import {BehaviorSubject, from, Subject} from 'rxjs';
import {Dao} from '../../../shared/service';
import {share} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Product {
  // constructor(public p: string) {
  //   console.log(p)
  // }
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrder {
  constructor(private product: Product) {
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  price: number;
  data = [1, 2, 3, 4, 5, 6, 7, 8];
  date = this.minusDays(new Date(), 100);
  dao: Dao = new Dao();

  constructor() {
    this.price = 123.34;
  }

  ngOnInit(): void {
    // const inject = Injector.create({
    //   providers: [
    //     // {
    //     //   provide: Product,
    //     //   // useClass: Product,
    //     //   useFactory: () => {
    //     //     return new Product('大米手机')
    //     //   }
    //     // },
    //     // {
    //     //   provide: PurchaseOrder,
    //     //   useClass: PurchaseOrder,
    //     //   deps: [Product]
    //     // },
    //     // {
    //     //   provide: token,
    //     //   useValue: 'http://localhost'
    //     // }
    //   ]
    // });
    // // console.log(inject.get(Product))
    // // console.log(inject.get(PurchaseOrder))
    // console.log(inject.get(token))
    // this.dao.bSub.subscribe(params => {
    //   console.log('bSub', params);
    // });
  }

  test1() {
    this.dao.bSub.next(1);
    this.dao.bSub.next(2);
  }

  test2() {
  }

  test3() {
  }

  test4() {
  }

  timer() {
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}

// const subject = new Subject();
//
// setInterval(() => {
//   subject.subscribe({
//     next: (v) => console.log('subject: ' + v)
//   });
//   console.log('_________-')
// }, 1000)
// subject.subscribe({
//   next: (v) => console.log('subject: ' + v)
// });
//
// const observable = from([1, 2, 3]);
// // observable.subscribe(subject);
// const multicast = share();
// multicast(subject).subscribe(resp => {
//   console.log('多播', resp);
// });


// subject.next(1);
// subject.next(2);
// const behaviorSubject = new BehaviorSubject(0 /* 初始值 */);
//
// setInterval(() => {
//   behaviorSubject.subscribe({
//     next: (v) => console.log('behaviorSubject74: ' + v)
//   });
// }, 1000)
//
// behaviorSubject.next(1);
// behaviorSubject.next(2);
//
// behaviorSubject.subscribe({
//   next: (v) => console.log('behaviorSubject81: ' + v)
// });
//
// behaviorSubject.next(3);
