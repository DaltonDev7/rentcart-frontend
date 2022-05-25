import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTipoCombustibleComponent } from './list/list-tipo-combustible.component';
import { TipoCombustibleRoutingModule } from './tipo-combustible-routing.module';
import { AddOrEditTipoCombustibleComponent } from './addOrEdit/add-or-edit-tipo-combustible.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListTipoCombustibleComponent,
    AddOrEditTipoCombustibleComponent
  ],
  imports: [
    CommonModule,
    TipoCombustibleRoutingModule,
    SharedModule
  ]
})
export class TipoCombustibleModule { }
