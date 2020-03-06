import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components/home-container';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
