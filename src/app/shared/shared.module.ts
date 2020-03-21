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
import {CountDownComponent} from './components/count-down';
import {FooterComponent} from './components/footer';
import {VerticalGridComponent} from './components/vertical-grid';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TagDirective } from './directives/tag.directive';
import { AvatarDirective } from './directives';
import { ProductTitleComponent } from './components/product-title';
import { BackButtonComponent } from './components/back-button';
import {DialogModule} from '../dialog/dialog.module';
import { CloseDialogDirective } from './directives/close-dialog.directive';

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
  CountDownComponent,
  FooterComponent,
  VerticalGridComponent,
  ProductCardComponent,
  TagDirective,
  AvatarDirective,
  ProductTitleComponent,
  BackButtonComponent,
  CloseDialogDirective
];
const exports = [
  MagicFrogComponent,
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  ScrollableTabComponent,
  ImagesSliderComponent,
  HorizontalGridComponent,
  StorageComponent,
  RouterModule,
  CountDownComponent,
  AgoPipe,
  VerticalGridComponent,
  FooterComponent,
  ProductCardComponent,
  TagDirective,
  AvatarDirective,
  ProductTitleComponent,
  CommonModule,
  BackButtonComponent,
  DialogModule,
  CloseDialogDirective
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...exports
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
