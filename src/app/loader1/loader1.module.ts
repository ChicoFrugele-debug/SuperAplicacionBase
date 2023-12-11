import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Loader1PageRoutingModule } from './loader1-routing.module';

import { Loader1Page } from './loader1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Loader1PageRoutingModule
  ],
  declarations: [Loader1Page]
})
export class Loader1PageModule {}
