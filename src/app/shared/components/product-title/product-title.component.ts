import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../domain';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
