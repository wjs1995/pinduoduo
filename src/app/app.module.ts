import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home';
import { NotFindComponent } from './components/not-find/not-find.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFindComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
