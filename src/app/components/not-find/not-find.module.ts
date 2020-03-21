import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {NotFindComponent} from './not-find.component';

const routes: Routes = [
  {
    path: '',
    component: NotFindComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NotFindModule { }
