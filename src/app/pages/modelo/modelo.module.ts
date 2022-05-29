import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModeloComponent } from './list/list-modelo.component';
import { AddOrUpdatemodeloComponent } from './addOrUpdate/add-or-updatemodelo.component';
import { ModeloRoutingModule } from './modelo-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListModeloComponent,
    AddOrUpdatemodeloComponent
  ],
  imports: [
    CommonModule,
    ModeloRoutingModule,
    SharedModule
  ]
})
export class ModeloModule { }
