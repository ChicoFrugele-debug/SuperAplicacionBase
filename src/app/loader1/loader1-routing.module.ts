import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loader1Page } from './loader1.page';

const routes: Routes = [
  {
    path: '',
    component: Loader1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Loader1PageRoutingModule {}
