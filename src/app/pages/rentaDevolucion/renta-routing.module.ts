import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RentaDevolucionComponent } from './renta-devolucion.component';
import { AddRentaComponent } from './add/add-renta.component';
import { EditRentaComponent } from './edit/edit-renta.component';
import { RentaResolver } from 'src/app/core/resolvers/rentaDevolucion.resolver';

const routes: Routes = [
  {
    path:'',
    component: RentaDevolucionComponent,
    resolve: {
      rentas  : RentaResolver
    }
  },
  {
    path:'addOrEdit',
    component : AddRentaComponent
  },
  {
    path:'edit',
    component:EditRentaComponent
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
export class RentaRoutingModule { }
