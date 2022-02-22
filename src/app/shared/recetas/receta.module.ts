import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { RecetaRoutingModule } from './receta-routing.module';



@NgModule({
  declarations: [
    RecetaComponent
  ],
  imports: [
    CommonModule,
    RecetaRoutingModule
  ]
})
export class RecetaModule { }
