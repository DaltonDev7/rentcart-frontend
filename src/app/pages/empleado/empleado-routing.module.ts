import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './list/list-empleado.component';
import { AddEmpleadoComponent } from './add/add-empleado.component';
import { EditEmpleadoComponent } from './edit/edit-empleado.component';

const routes: Routes = [
  {
    path:'',
    component: ListEmpleadoComponent
  },
  {
    path:'add',
    component : AddEmpleadoComponent
  },
  {
    path:'edit',
    component:EditEmpleadoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EmpleadoRoutingModule { }
