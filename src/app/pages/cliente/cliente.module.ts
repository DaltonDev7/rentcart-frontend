import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClienteComponent } from './list/list-cliente.component';
import { EditClienteComponent } from './edit/edit-cliente.component';
import { AddClienteComponent } from './add/add-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';



@NgModule({
  declarations: [
    ListClienteComponent,
    EditClienteComponent,
    AddClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
