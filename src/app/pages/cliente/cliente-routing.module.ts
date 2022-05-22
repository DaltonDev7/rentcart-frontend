import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './add/add-cliente.component';
import { ListClienteComponent } from './list/list-cliente.component';
import { EditClienteComponent } from './edit/edit-cliente.component';

const routes: Routes = [
  {
    path:'',
    component: ListClienteComponent
  },
  {
    path:'add',
    component : AddClienteComponent
  },
  {
    path:'edit',
    component:EditClienteComponent
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
