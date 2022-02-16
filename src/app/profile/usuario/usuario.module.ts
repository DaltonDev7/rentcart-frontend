import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MiperfilComponent } from './components/mi-perfil/miperfil.component';



@NgModule({
  declarations: [
    HomeUsuarioComponent,
    MiperfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
