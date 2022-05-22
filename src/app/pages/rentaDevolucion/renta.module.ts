import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentaRoutingModule } from './renta-routing.module';
import { RentaDevolucionComponent } from './renta-devolucion.component';
import { EditRentaComponent } from './edit/edit-renta.component';
import { AddRentaComponent } from './add/add-renta.component';



@NgModule({
  declarations: [
    RentaDevolucionComponent,
    EditRentaComponent,
    AddRentaComponent
  ],
  imports: [
    CommonModule,
    RentaRoutingModule
  ]
})
export class RentaModule { }
