import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOrEditMarcaComponent } from './addOrEdit/add-or-edit-marca.component';
import { ListMarcaComponent } from './list/list-marca.component';
import { MarcaRoutingModule } from './marca-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AddOrEditMarcaComponent,
    ListMarcaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarcaRoutingModule
  ]
})
export class MarcaModule { }
