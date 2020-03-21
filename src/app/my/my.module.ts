import { NgModule } from '@angular/core';
import { MyContainerComponent } from './components/my-container';
import {MyRoutingModule} from './my-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [MyContainerComponent],
  imports: [
    MyRoutingModule,
    SharedModule
  ]
})
export class MyModule { }
