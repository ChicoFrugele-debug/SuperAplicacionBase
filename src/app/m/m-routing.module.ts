import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MPage } from './m.page';

const routes: Routes = [
  {
    path: '',
    component: MPage
  }
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MPageRoutingModule {}
