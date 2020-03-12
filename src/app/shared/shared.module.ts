import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MagicFrogComponent} from './magic-frog/magic-frog.component';
import {GridItemDirective} from './directives';
import {GridItemImageDirective} from './directives';
import {GridItemTitleDirective} from './directives';
import {ScrollableTabComponent} from './components/scrollable-tab';
import {ImagesSliderComponent} from './components/images-slider';
import {StorageComponent} from '../test/storage/storage.component';
import {HorizontalGridComponent} from './components/horizontal-grid';
import {RouterModule} from '@angular/router';
import {AgoPipe} from './pipes';
import {BrowserStorageService} from './service';
import {token} from './service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NotificationInterceptor, ParamInterceptor} from './Interceptor';
import { CountDownComponent } from './components/count-down/count-down.component';
import { FooterComponent } from './components/footer/footer.component';

const providers = [BrowserStorageService];
const modules = [CommonModule, RouterModule];
const declarations = [
  MagicFrogComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  ScrollableTabComponent,
  ImagesSliderComponent,
  HorizontalGridComponent,
  StorageComponent,
  AgoPipe,
  CountDownComponent
];
const example = [MagicFrogComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  ScrollableTabComponent,
  ImagesSliderComponent,
  HorizontalGridComponent,
  StorageComponent,
  RouterModule,
  CountDownComponent,
  AgoPipe];

@NgModule({
  declarations: [
    ...declarations,
    FooterComponent,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...example,
    FooterComponent
  ],
  providers: [
    ...providers,
    {
      provide: token,
      useValue: 'http://localhost:dev'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ]
})

export class SharedModule {
}
