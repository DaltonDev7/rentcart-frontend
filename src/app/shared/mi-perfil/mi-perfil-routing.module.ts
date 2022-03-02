import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MiperfilComponent } from './miperfil.component';
import { GetPostByUserResolver } from '../../core/resolvers/get-post-by-user.resolver';

const routes: Routes = [
  {
    path: '',
    component: MiperfilComponent,
    resolve: {
      postsUsuarios: GetPostByUserResolver
    }
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MiPerfilRoutingModule { }
