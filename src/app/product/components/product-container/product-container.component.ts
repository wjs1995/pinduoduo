import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';
import {OrderService} from '../../../shared/service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductVariant} from '../domain';
import {filter, map, switchMap} from 'rxjs/operators';
import {DialogService} from '../../../dialog/services';
import {ProductVariantDialogComponent} from '../product-variant-dialog/product-variant-dialog.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selected = 0;

  constructor(
    private orderService: OrderService,
    private active: ActivatedRoute,
    private dialogService: DialogService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const productId$ = this.active.paramMap.pipe(
      filter(f => f.has('productId')),
      map(m => m.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
    );
  }

  handleDirectBuy(variants: ProductVariant[]) {
  }

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      this.dialogService.saveData(ev);
      console.log(formSubmitted, ev);
      this.router.navigate(['orders/confirm']);
    });

    const selected = new EventEmitter();
    selected.subscribe(ev => {
      console.log('selected', ev);
      this.selected = ev;
    });
    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants,
        selectedVariantIndex: this.selected
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top: top + '%',
        left: '0',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
