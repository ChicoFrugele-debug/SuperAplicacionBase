import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa1PageRoutingModule } from './mapa1-routing.module';

import { Mapa1Page } from './mapa1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mapa1PageRoutingModule
  ],
  declarations: [Mapa1Page]
})
export class Mapa1PageModule {}
