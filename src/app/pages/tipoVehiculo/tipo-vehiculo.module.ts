import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOrEditTipoVehiculoComponent } from './addOrEdit/add-or-edit-tipo-vehiculo.component';
import { ListTipovehiculoComponent } from './list/list-tipovehiculo.component';
import { TipoVehiculoRoutingModule } from './tipo-vehiculo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListTipovehiculoComponent,
    AddOrEditTipoVehiculoComponent
  ],
  imports: [
    CommonModule,
    TipoVehiculoRoutingModule,
    SharedModule
  ]
})
export class TipoVehiculoModule { }
