import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigininRoutingModule } from './sigin-routing.module';
import { SigninComponent } from './signin.component';
import { SigninService } from './services/signin.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../store/auth.effects';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigininRoutingModule,
    SharedModule,
  //  ReactiveFormsModule,
 //   EffectsModule.forFeature([AuthEffects])
  ],
  providers:[
   // SigninService
  ]
})
export class SigInModule { }
