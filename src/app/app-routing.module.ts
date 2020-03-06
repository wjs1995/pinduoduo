import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './home/components/home-container';
import {HomeModule} from './home';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeContainerComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
