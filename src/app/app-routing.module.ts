import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./authentication/sign-in/sigin.module').then(m => m.SigInModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./authentication/sign-up/signup.module').then(m => m.SignUpModule)
  },
  {
    path: '**',
    loadChildren: () => import('./shared/page404/page404.module').then(m => m.Page404Module)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
