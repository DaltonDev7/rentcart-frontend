import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPerfilRoutingModule } from './mi-perfil-routing.module';
import { MiperfilComponent } from './miperfil.component';
import { ImagenPerfilModule } from '../show-imagen-perfil/imagen-perfil.module';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    MiperfilComponent
  ],
  imports: [
    CommonModule,
    MiPerfilRoutingModule,
    ImagenPerfilModule,
    ButtonModule
  ]
})
export class MiPerfilModule { }
