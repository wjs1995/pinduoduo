import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components/home-container';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import { HomeDetailComponent } from './components/home-detail';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeAuxComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    RouterModule,
    CommonModule,
  ]
})
export class HomeModule { }
