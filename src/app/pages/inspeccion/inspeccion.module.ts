import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInspeccionComponent } from './list/list-inspeccion.component';
import { AddInspeccionComponent } from './add/add-inspeccion.component';
import { InspeccionRoutingModule } from './inspeccion-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListInspeccionComponent,
    AddInspeccionComponent
  ],
  imports: [
    CommonModule,
    InspeccionRoutingModule,
    SharedModule
  ]
})
export class InspeccionModule { }
