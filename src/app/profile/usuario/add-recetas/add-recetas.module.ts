import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecetasComponent } from './add-recetas.component';
import { AddRecetasRoutingModule } from './add-recetas-routing.module';
import { ComponentesRecetasModule } from '../components/componentes-recetas.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddRecetasManagerService } from './add-recetas-manager.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadImageModule } from 'src/app/shared/upload-image/upload-image.module';
import { EffectsModule } from '@ngrx/effects';
import { PostRecetasEffects } from '../store/post-recetas.effects';



@NgModule({
  declarations: [
    AddRecetasComponent
  ],
  imports: [
    CommonModule,
    AddRecetasRoutingModule,
    FormsModule,
    SharedModule,
    ComponentesRecetasModule,
    UploadImageModule,
    EffectsModule.forFeature([PostRecetasEffects])
  ],
  providers:[
    AddRecetasManagerService,
  ]
})
export class AddRecetasModule { }
