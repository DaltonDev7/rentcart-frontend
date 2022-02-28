import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagePostComponent } from './upload-image-post.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  declarations: [
    UploadImagePostComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    ImageCropperModule,
    DialogModule,
    ButtonModule,
    CarouselModule,
    FileUploadModule
    
  ],
  exports:[
    UploadImagePostComponent
  ]
})
export class UploadImagePostModule { }
