import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MagicFrogComponent} from './magic-frog/magic-frog.component';
import {GridItemDirective} from './directives';
import {GridItemImageDirective} from './directives';
import {GridItemTitleDirective} from './directives';


const modules = [CommonModule];
const example = [MagicFrogComponent, GridItemDirective, GridItemImageDirective, GridItemTitleDirective];

@NgModule({
  declarations: [MagicFrogComponent, GridItemDirective, GridItemImageDirective, GridItemTitleDirective],
  imports: [
    ...modules
  ],
  exports: [
    ...example
  ]
})

export class SharedModule {
}
