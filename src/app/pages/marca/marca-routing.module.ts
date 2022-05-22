import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMarcaComponent } from './list/list-marca.component';
import { AddOrEditMarcaComponent } from './addOrEdit/add-or-edit-marca.component';
import { MarcaResolver } from 'src/app/core/resolvers/marca.resolver';

const routes: Routes = [
  {
    path:'',
    component : ListMarcaComponent,
    resolve:{
      marcas : MarcaResolver
    }
  },
  {
    path:'addOrEdit',
    component: AddOrEditMarcaComponent
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
export class MarcaRoutingModule { }
