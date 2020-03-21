import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendContainerComponent} from './components/recommend-container';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {RecommendRoutingModule} from './recommend-routing.module';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    SharedModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule {
}
