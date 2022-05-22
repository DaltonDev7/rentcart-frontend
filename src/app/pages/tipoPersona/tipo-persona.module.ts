import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTipopersonaComponent } from './list/list-tipopersona.component';
import { EditTipopersonaComponent } from './edit/edit-tipopersona.component';
import { AddTipopersonaComponent } from './add/add-tipopersona.component';
import { TipoPersonaRoutingModule } from './tipo-persona-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListTipopersonaComponent,
    EditTipopersonaComponent,
    AddTipopersonaComponent
  ],
  imports: [
    CommonModule,
    TipoPersonaRoutingModule,
    SharedModule
  ]
})
export class TipoPersonaModule { }
