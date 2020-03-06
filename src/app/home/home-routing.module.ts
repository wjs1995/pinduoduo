import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './components/home-container';
import {HomeDetailComponent} from './components/home-detail';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent
      }
    ]
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
