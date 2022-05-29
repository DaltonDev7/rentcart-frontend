import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListModeloComponent } from './list/list-modelo.component';
import { AddOrUpdatemodeloComponent } from './addOrUpdate/add-or-updatemodelo.component';
import { ModeloResolver } from 'src/app/core/resolvers/modelo.resolver';


const routes: Routes = [
  {
    path: '',
    component: ListModeloComponent,
    resolve: {
      modelos : ModeloResolver
    }
  },
  {
    path: 'addOrUpdate',
    component: AddOrUpdatemodeloComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModeloRoutingModule { }
