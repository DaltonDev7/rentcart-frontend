import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileSelectionComponent } from './profile-selection/profile-selection.component';
import { NegateauthGuard } from './core/guards/negateauth.guard';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'seleccion-perfil',
    component: ProfileSelectionComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/sign-in/sigin.module').then(m => m.SigInModule),
    canActivate:[NegateauthGuard]
  },
  {
    path: 'registrate',
    loadChildren: () => import('./authentication/sign-up/signup.module').then(m => m.SignUpModule),
    canActivate:[NegateauthGuard]
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
