import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredienteRecetasComponent } from './ingredientes-recetas/ingrediente-recetas.component';
import { PasosRecetasComponent } from './pasos-recetas/pasos-recetas.component';
import { NutricionRecetasComponent } from './nutricion-recetas/nutricion-recetas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    IngredienteRecetasComponent,
    PasosRecetasComponent,
    NutricionRecetasComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IngredienteRecetasComponent,
    PasosRecetasComponent,
    NutricionRecetasComponent,
    AddPostComponent
  ]
})
export class ComponentesRecetasModule { }
