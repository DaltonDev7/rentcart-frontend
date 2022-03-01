import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredienteRecetasComponent } from './ingredientes-recetas/ingrediente-recetas.component';
import { PasosRecetasComponent } from './pasos-recetas/pasos-recetas.component';
import { NutricionRecetasComponent } from './nutricion-recetas/nutricion-recetas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImagenesPostComponent } from './imagenes-post/imagenes-post.component';
import { ImagenPerfilModule } from 'src/app/shared/show-imagen-perfil/imagen-perfil.module';
import { UploadImageModule } from 'src/app/shared/upload-image/upload-image.module';
import { UploadImagePostModule } from 'src/app/shared/upload-image-post/upload-image-post.module';
import {BadgeModule} from 'primeng/badge';

import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    IngredienteRecetasComponent,
    PasosRecetasComponent,
    NutricionRecetasComponent,
    AddPostComponent,
    ImagenesPostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ImagenPerfilModule,
    UploadImageModule,
    UploadImagePostModule,
    BadgeModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    IngredienteRecetasComponent,
    PasosRecetasComponent,
    NutricionRecetasComponent,
    AddPostComponent,
    ImagenesPostComponent
  ]
})
export class ComponentesRecetasModule { }
