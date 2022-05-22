import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'prefix'
  },
  {
    path: 'signin',
    loadChildren: () => import("./authentication/sign-in/sign-in.module").then(m => m.SignInModule)
  },
  {
    path: 'renta',
    component: HomeComponent,
    loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
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
