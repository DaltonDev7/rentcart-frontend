import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    NgSelectModule,
    ReactiveFormsModule,
    NgxMaskModule,
    SweetAlert2Module
  ]
})
export class SharedModule { }
