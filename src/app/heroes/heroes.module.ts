import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //IMPORT COMMONMODULE

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule //SE DEBE IMPORTAR EN LOS MODULOS CREADOS
  ]
})
export class HeroesModule { }
