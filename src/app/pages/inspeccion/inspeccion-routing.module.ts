import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListInspeccionComponent } from './list/list-inspeccion.component';
import { AddInspeccionComponent } from './add/add-inspeccion.component';
import { InspeccionResolver } from 'src/app/core/resolvers/inspeccion.resolver';


const routes: Routes = [
  {
    path:'',
    component: ListInspeccionComponent,
    resolve: {
      inspecciones: InspeccionResolver
    }
  },
  {
    path:'addOrUpdate',
    component : AddInspeccionComponent
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
