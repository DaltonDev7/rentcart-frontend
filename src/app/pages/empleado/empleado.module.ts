import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmpleadoComponent } from './list/list-empleado.component';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { AddOrEditComponent } from './addOrEdit/add-or-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListEmpleadoComponent,
    AddOrEditComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    SharedModule
  ]
})
export class EmpleadoModule { }
