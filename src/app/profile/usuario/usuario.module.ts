import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    HomeUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
