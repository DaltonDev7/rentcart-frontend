import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UploadImageModule } from 'src/app/shared/upload-image/upload-image.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    NgSelectModule,
    UploadImageModule,
    ButtonModule
  ]
})
export class SignUpModule { }
