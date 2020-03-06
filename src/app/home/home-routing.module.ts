import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './components/home-container';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
