import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyContainerComponent} from './components/my-container';

const routes: Routes = [
  {
    path: '',
    component: MyContainerComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MyRoutingModule {
}
