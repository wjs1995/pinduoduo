import {NgModule} from '@angular/core';
import {ProductContainerComponent} from './components/product-container';
import {ProductRoutingModule} from './product-routing.module';
import {GroupItemComponent} from './components/group-item';
import {GroupShortListComponent} from './components/group-short-list';
import {ProductVariantDialogComponent} from './components/product-variant-dialog/product-variant-dialog.component';
import {SharedModule} from '../shared/shared.module';
import {ProductAmountComponent} from './components/product-amount';
import {ConfirmOlderComponent} from './components/confirm-older/confirm-older.component';
import { PaymentComponent } from './components/payment/payment.component';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    ConfirmOlderComponent,
    PaymentComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
})
export class ProductModule {
}
