import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';

console.log("abc Module")
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AbcRoutingModule
  ]
})
export class AbcModule { }
