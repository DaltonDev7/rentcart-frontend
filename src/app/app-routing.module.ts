import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileSelectionComponent } from './profile-selection/profile-selection.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'seleccion-perfil',
    component: ProfileSelectionComponent,
  },
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
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
