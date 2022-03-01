import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';





const routes: Routes = [
  {
    path: '',
    component: HomeUsuarioComponent
  },
  {
    path: 'me',
    loadChildren: () => import('../../shared/mi-perfil/mi-perfil.module').then(m => m.MiPerfilModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-recetas/add-recetas.module').then(m => m.AddRecetasModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('../../shared/recetas/receta.module').then(m => m.RecetaModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
