import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './components/home-container';
import {HomeDetailComponent} from './components/home-detail';
import {HomeGrandComponent} from './components/home-grand';
import {HomeAuxComponent} from './components/home-aux';
import {ParentComponent} from './components/parent';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent
          }
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: ParentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {
}
