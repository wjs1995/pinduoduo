import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home';
import {NotFindComponent} from './components/not-find';
import {HttpClientModule} from '@angular/common/http';
import {RecommendModule} from './recommend';
import {MyModule} from './my/my.module';
import {ProductModule} from './product';
import {registerLocaleData} from '@angular/common';
import localZh from '@angular/common/locales/zh-Hans';

@NgModule({
  declarations: [
    AppComponent,
    NotFindComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    // RecommendModule,
    // MyModule,
    // ProductModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'zh-Hans'
  }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh');
  }
}
