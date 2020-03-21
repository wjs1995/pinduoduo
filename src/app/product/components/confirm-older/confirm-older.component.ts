import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogService} from '../../../dialog/services';
import {combineLatest, merge, Observable, Subject} from 'rxjs';
import {ProductVariant} from '../domain';
import {map, share, shareReplay, tap} from 'rxjs/operators';
import {Payment} from '../payment';

@Component({
  selector: 'app-confirm-older',
  templateUrl: './confirm-older.component.html',
  styleUrls: ['./confirm-older.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOlderComponent implements OnInit {
  item$: Observable<object | null | any>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[] = [];

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];

    this.item$ = this.dialogService.getData().pipe(tap(val => console.log(11, val)), shareReplay());
    const unitPrice$ = this.item$.pipe(
      map((item: { variant: ProductVariant; count: number }) => item.variant.price),
      tap(val => console.log(22, val))
    );

    const amount$ = this.item$.pipe(
      map((item: { variant: ProductVariant; count: number }) => item.count),
      tap(val => console.log(33, val))
    );
    const mergeCount$ = merge(amount$, this.count$).pipe(
      tap(val => console.log(44, val))
    );
    this.totalPrice$ = combineLatest([unitPrice$, mergeCount$]).pipe(
      tap(val => console.log(55, val)),
      map(([price, amount]) => price * amount)
    );

  }

  change($event: number) {
    this.count$.next($event);
  }

  handlePay() {

  }
}
