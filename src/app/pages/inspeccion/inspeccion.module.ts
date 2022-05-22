import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInspeccionComponent } from './list/list-inspeccion.component';
import { EditInspeccionComponent } from './edit/edit-inspeccion.component';
import { AddInspeccionComponent } from './add/add-inspeccion.component';
import { InspeccionRoutingModule } from './inspeccion-routing.module';



@NgModule({
  declarations: [
    ListInspeccionComponent,
    EditInspeccionComponent,
    AddInspeccionComponent
  ],
  imports: [
    CommonModule,
    InspeccionRoutingModule
  ]
})
export class InspeccionModule { }
