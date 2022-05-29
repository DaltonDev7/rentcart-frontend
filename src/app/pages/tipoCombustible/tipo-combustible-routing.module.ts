import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTipoCombustibleComponent } from './list/list-tipo-combustible.component';
import { AddOrEditTipoCombustibleComponent } from './addOrEdit/add-or-edit-tipo-combustible.component';
import { TipoCombustibleResolver } from 'src/app/core/resolvers/tipoCombustible.resolver';


const routes: Routes = [
  {
    path: '',
    component: ListTipoCombustibleComponent,
    resolve:{
      tipoCombustible : TipoCombustibleResolver
    }
  },
  {
    path: 'addOrEdit',
    component: AddOrEditTipoCombustibleComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class TipoCombustibleRoutingModule { }
