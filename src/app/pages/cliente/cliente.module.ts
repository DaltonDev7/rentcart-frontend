import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClienteComponent } from './list/list-cliente.component';
import { EditClienteComponent } from './edit/edit-cliente.component';
import { AddClienteComponent } from './add/add-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListClienteComponent,
    EditClienteComponent,
    AddClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
