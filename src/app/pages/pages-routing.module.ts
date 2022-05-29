import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./rentaDevolucion/renta.module").then(m => m.RentaModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import("./cliente/cliente.module").then(m => m.ClienteModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import("./empleado/empleado.module").then(m => m.EmpleadoModule)
  },
  {
    path: 'inspeccion',
    loadChildren: () => import("./inspeccion/inspeccion.module").then(m => m.InspeccionModule)
  },
  {
    path: 'tipoPersona',
    loadChildren: () => import("./tipoPersona/tipo-persona.module").then(m => m.TipoPersonaModule)
  },
  {
    path: 'marca',
    loadChildren: () => import("./marca/marca.module").then(m => m.MarcaModule)
  },
  {
    path: 'modelo',
    loadChildren: () => import("./modelo/modelo.module").then(m => m.ModeloModule)
  },
  {
    path: 'tipoVehiculos',
    loadChildren: () => import("./tipoVehiculo/tipo-vehiculo.module").then(m => m.TipoVehiculoModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import("./vehiculo/vehiculo.module").then(m => m.VehiculoModule)
  },
  {
    path: 'tipoCombustible',
    loadChildren: () => import("./tipoCombustible/tipo-combustible.module").then(m => m.TipoCombustibleModule)
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
export class PagesRoutingModule { }
