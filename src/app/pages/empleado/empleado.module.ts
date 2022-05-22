import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmpleadoComponent } from './list/list-empleado.component';
import { EditEmpleadoComponent } from './edit/edit-empleado.component';
import { AddEmpleadoComponent } from './add/add-empleado.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';



@NgModule({
  declarations: [
    ListEmpleadoComponent,
    EditEmpleadoComponent,
    AddEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
