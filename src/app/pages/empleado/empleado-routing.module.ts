import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './list/list-empleado.component';
import { AddOrEditComponent } from './addOrEdit/add-or-edit.component';
import { EmpleadoResolver } from 'src/app/core/resolvers/empleado.resolver';


const routes: Routes = [
  {
    path: '',
    component: ListEmpleadoComponent,
    resolve: {
      empleados: EmpleadoResolver
    }
  },
  {
    path: 'addOrEdit',
    component: AddOrEditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmpleadoRoutingModule { }
