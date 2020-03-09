import {LOCALE_ID, NgModule} from '@angular/core';
import { HomeContainerComponent } from './components/home-container';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { HomeDetailComponent } from './components/home-detail';
import {RouterModule} from '@angular/router';
import {CommonModule, registerLocaleData} from '@angular/common';
import { HomeGrandComponent } from './components/home-grand';
import { HomeAuxComponent } from './components/home-aux';
import localZh from '@angular/common/locales/zh-Hans-HK';
@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    RouterModule,
    CommonModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ]
})
export class HomeModule {
  constructor() {
    registerLocaleData(localZh, 'zh')
  }
}
