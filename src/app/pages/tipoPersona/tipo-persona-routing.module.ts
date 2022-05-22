import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTipopersonaComponent } from './list/list-tipopersona.component';
import { AddTipopersonaComponent } from './add/add-tipopersona.component';
import { EditTipopersonaComponent } from './edit/edit-tipopersona.component';
import { TipoPersonaResolver } from 'src/app/core/resolvers/tipoPersona.resolver';
import { GetByIdTipoPersonaResolver } from 'src/app/core/resolvers/get-IdTipoPersona.resolver';

const routes: Routes = [
  {
    path:'',
    component: ListTipopersonaComponent,
    resolve:{
      tipoPersona : TipoPersonaResolver
    }
  },
  {
    path:'add',
    component: AddTipopersonaComponent
  },
  {
    path:'edit/:id',
    component: EditTipopersonaComponent,
    resolve:{
      tipoPersona : GetByIdTipoPersonaResolver
    }
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
export class TipoPersonaRoutingModule { }
