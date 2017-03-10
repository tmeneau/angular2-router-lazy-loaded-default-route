import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LazyComponent } from './lazy.component';
import { DefaultChildComponent } from './default-child/default-child.component';
import { OtherChildComponent } from './other-child/other-child.component';

const lazyRoutes: Routes = [
  { 
    path: '', 
    component: LazyComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'default-child' },
      { path: 'default-child', component: DefaultChildComponent },
      { path: 'other-child', component: OtherChildComponent }
    ] 
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  exports: [RouterModule]
})
export class LazyRoutingModule {}