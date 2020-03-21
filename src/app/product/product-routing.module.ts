import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ProductContainerComponent} from './components/product-container';
import {ConfirmOlderComponent} from './components/confirm-older';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'confirm',
        component: ConfirmOlderComponent
      },
      {
        path: ':productId',
        component: ProductContainerComponent
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class ProductRoutingModule {
}
