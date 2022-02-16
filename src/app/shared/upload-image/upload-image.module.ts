import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    UploadImageComponent
  ]
})
export class UploadImageModule { }
