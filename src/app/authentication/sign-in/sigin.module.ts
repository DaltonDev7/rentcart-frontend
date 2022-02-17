import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigininRoutingModule } from './sigin-routing.module';
import { SigninComponent } from './signin.component';
import { SigninService } from './services/signin.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigininRoutingModule,
    SharedModule
  ],
  providers: [
    SigninService
  ]
})
export class SigInModule { }
