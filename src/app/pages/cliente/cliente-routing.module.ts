import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './add/add-cliente.component';
import { ListClienteComponent } from './list/list-cliente.component';
import { EditClienteComponent } from './edit/edit-cliente.component';
import { ClienteResolver } from 'src/app/core/resolvers/cliente.resolver';

const routes: Routes = [
  {
    path:'',
    component: ListClienteComponent,
    resolve: {
      clientes : ClienteResolver
    }
  },
  {
    path:'addOrEdit',
    component : AddClienteComponent
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
export class ClienteRoutingModule { }
