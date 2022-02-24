import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecetasComponent } from './add-recetas.component';
import { AddRecetasRoutingModule } from './add-recetas-routing.module';
import { ComponentesRecetasModule } from '../components/componentes-recetas.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddRecetasManagerService } from './add-recetas-manager.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddRecetasComponent
  ],
  imports: [
    CommonModule,
    AddRecetasRoutingModule,
    FormsModule,
    SharedModule,
    ComponentesRecetasModule
  ],
  providers:[
    AddRecetasManagerService,
  ]
})
export class AddRecetasModule { }
