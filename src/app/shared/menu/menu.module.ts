import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {TooltipModule} from 'primeng/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule.forChild([])
  ],
  exports: [
    MenuComponent,
  //  FontAwesomeModule
  ]
})
export class MenuModule { }
