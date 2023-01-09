import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGenericoComponent } from './table-generico.component';



@NgModule({
  declarations: [
    TableGenericoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableGenericoComponent
  ]
})
export class TableGenericoModule { }
