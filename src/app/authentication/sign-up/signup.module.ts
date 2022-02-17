import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UploadImageModule } from 'src/app/shared/upload-image/upload-image.module';
import { ButtonModule } from 'primeng/button';
import { SignupService } from './services/signup.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessageService } from 'primeng/api';
import { RegistroValidatorService } from './services/registro-validator.service';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    NgSelectModule,
    UploadImageModule,
    ButtonModule,
    SharedModule
  ],
  providers:[
    SignupService,
    RegistroValidatorService
  ]
})
export class SignUpModule { }
