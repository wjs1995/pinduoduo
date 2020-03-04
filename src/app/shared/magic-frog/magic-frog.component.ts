import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-frog',
  templateUrl: './magic-frog.component.html',
  styleUrls: ['./magic-frog.component.css']
})
export class MagicFrogComponent implements OnInit {
  // mobilePlatform = new MobilePlatform(this);
  constructor() { }

  ngOnInit() {
  }

}

// class MobilePlatform {
//   displayDatePicker = false;
//   date = null;
//
//   constructor(public page: SalesOrderListPage) {
//   }
//
//   displayDate() {
//     this.displayDatePicker = true;
//   }
//
//   changed($event: Date[]) {
//     console.debug($event);
//     // this.displayDatePicker = false;
//   }
//
//   visibleChange($event: boolean) {
//     console.debug($event)
//   }
// }
