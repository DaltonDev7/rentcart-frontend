import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NgSelectModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class SharedModule { }
