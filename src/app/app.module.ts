import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components/scrollable-tab';
import { ImagesSliderComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid';
import { StorageComponent } from './test/storage/storage.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImagesSliderComponent,
    HorizontalGridComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
