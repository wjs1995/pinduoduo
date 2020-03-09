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
import {Router, RouterModule} from '@angular/router';


const modules = [CommonModule, RouterModule];
const example = [MagicFrogComponent, GridItemDirective, GridItemImageDirective, GridItemTitleDirective, ScrollableTabComponent,
  ImagesSliderComponent,
  HorizontalGridComponent,
  StorageComponent, RouterModule];

@NgModule({
  declarations: [MagicFrogComponent, GridItemDirective, GridItemImageDirective, GridItemTitleDirective, ScrollableTabComponent,
    ImagesSliderComponent,
    HorizontalGridComponent,
    StorageComponent],
  imports: [
    ...modules
  ],
  exports: [
    ...example
  ]
})

export class SharedModule {
}
