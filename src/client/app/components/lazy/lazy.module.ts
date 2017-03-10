import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { DefaultChildComponent } from './default-child/default-child.component';
import { OtherChildComponent } from './other-child/other-child.component';

@NgModule({
  imports: [LazyRoutingModule],
  declarations: [
    LazyComponent,
    DefaultChildComponent,
    OtherChildComponent
  ]
})
export class LazyModule {}