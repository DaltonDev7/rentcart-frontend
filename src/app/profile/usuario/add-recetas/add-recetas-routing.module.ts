import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddRecetasComponent } from './add-recetas.component';

const routes: Routes = [
  {
    path: '',
    component: AddRecetasComponent
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
export class AddRecetasRoutingModule { }
