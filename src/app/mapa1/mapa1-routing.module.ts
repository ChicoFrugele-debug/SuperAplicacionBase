import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mapa1Page } from './mapa1.page';

const routes: Routes = [
  {
    path: '',
    component: Mapa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mapa1PageRoutingModule {}
