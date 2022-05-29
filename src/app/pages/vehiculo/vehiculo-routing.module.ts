import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiculoComponent } from './list/list-vehiculo.component';
import { VehiculoResolver } from 'src/app/core/resolvers/vehiculo.resolver';
import { AddOrEditVehiculoComponent } from './addOrEdit/add-or-edit-vehiculo.component';


const routes: Routes = [
  {
    path: '',
    component: ListVehiculoComponent,
    resolve: {
      vehiculos: VehiculoResolver
    }
  },
  {
    path: 'addOrEdit',
    component: AddOrEditVehiculoComponent
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
export class VehiculoRoutingModule { }
