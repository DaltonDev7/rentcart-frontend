import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTipovehiculoComponent } from './list/list-tipovehiculo.component';
import { AddOrEditTipoVehiculoComponent } from './addOrEdit/add-or-edit-tipo-vehiculo.component';
import { TipoVehiculoResolver } from 'src/app/core/resolvers/tipoVehiculo.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListTipovehiculoComponent,
    resolve: {
      tipoVehiculos: TipoVehiculoResolver
    }
  },
  {
    path: 'addOrEdit',
    component: AddOrEditTipoVehiculoComponent
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
export class TipoVehiculoRoutingModule { }
