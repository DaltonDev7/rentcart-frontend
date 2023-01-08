import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
  },
  {
    path: 'signin',
    loadChildren: () => import("./authentication/sign-in/sign-in.module").then(m => m.SignInModule)
  },
  {
    path: '**',
    loadChildren: () => import("./shared/page404/page404.module").then(m => m.Page404Module)
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
