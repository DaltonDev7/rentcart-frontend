import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSelectionGuard } from '../core/guards/profile-selection.guard';
import { Perfil } from '../core/enum/perfil.enums';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
    canActivate: [ProfileSelectionGuard],
    data: { role: Perfil.USUARIO }
  },
  {
    path: 'administrador',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [ProfileSelectionGuard],
    data: { role: Perfil.ADMINISTRADOR }
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
export class ProfileRoutingModule { }
