import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListInspeccionComponent } from './list/list-inspeccion.component';
import { AddInspeccionComponent } from './add/add-inspeccion.component';
import { EditInspeccionComponent } from './edit/edit-inspeccion.component';

const routes: Routes = [
  {
    path:'',
    component: ListInspeccionComponent
  },
  {
    path:'add',
    component : AddInspeccionComponent
  },
  {
    path:'edit',
    component:EditInspeccionComponent
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
export class InspeccionRoutingModule { }
