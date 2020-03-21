import {NgModule} from '@angular/core';
import {HomeContainerComponent} from './components/home-container';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeDetailComponent} from './components/home-detail';
import {RouterModule} from '@angular/router';
import {HomeGrandComponent} from './components/home-grand';
import {HomeAuxComponent} from './components/home-aux';
import {ParentComponent} from './components/parent';
import {ChildComponent} from './components/child';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent, ParentComponent, ChildComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    RouterModule,
  ],
  providers: []
})
export class HomeModule {

}
