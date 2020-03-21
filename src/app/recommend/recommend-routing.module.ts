import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecommendContainerComponent} from './components/recommend-container';

const routes: Routes = [
  {
    path: '',
    component: RecommendContainerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RecommendRoutingModule { }
