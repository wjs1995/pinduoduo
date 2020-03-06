import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components/home-container';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { HomeDetailComponent } from './components/home-detail';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
