import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  price: number;
  data = [1, 2, 3, 4, 5, 6, 7, 8];
  date = this.minusDays(new Date(), 100);

  constructor() {
    this.price = 123.34;
  }

  ngOnInit(): void {
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

}
