import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImagenPerfilModule } from '../../shared/show-imagen-perfil/imagen-perfil.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [
    HomeUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ImagenPerfilModule
  ],
  providers :[
    PostService
  ]
})
export class UsuarioModule { }
