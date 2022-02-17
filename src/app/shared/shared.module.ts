import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {ToastModule} from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule
    
  ],
  exports:[
    ReactiveFormsModule,
    NgSelectModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }
