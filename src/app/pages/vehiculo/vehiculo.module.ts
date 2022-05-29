import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiculoComponent } from './list/list-vehiculo.component';
import { AddOrEditVehiculoComponent } from './addOrEdit/add-or-edit-vehiculo.component';
import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListVehiculoComponent,
    AddOrEditVehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    SharedModule
  ]
})
export class VehiculoModule { }
