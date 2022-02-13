import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigininRoutingModule } from './sigin-routing.module';
import { SigninComponent } from './signin.component';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigininRoutingModule
  ]
})
export class SigInModule { }
