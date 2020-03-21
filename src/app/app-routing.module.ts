import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my',
    loadChildren: () => import('./my').then(m => m.MyModule)
  },
  {
    path: 'recommend',
    loadChildren: () => import('./recommend').then(m => m.RecommendModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat').then(m => m.ChatModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./product').then(m => m.ProductModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./product').then(m => m.ProductModule)
  },
  {
    path: '**',
    loadChildren: () => import('./components').then(c => c.NotFindModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,

    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  exports: [
  ]
})
export class AppRoutingModule {
}
