import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),
  },
  {
    path: 'administrador',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProfileRoutingModule { }
