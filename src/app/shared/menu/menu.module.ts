import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    MenuComponent,
  //  FontAwesomeModule
  ]
})
export class MenuModule { }
