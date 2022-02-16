import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() imagenUsuario = new EventEmitter<string>();
  imgUserFile: string = '';

  //atributos cropper-js
  imageChangedEvent: any;
  croppedImage: any = '';
  displayBasic: boolean = false

  constructor() { }

  ngOnInit(): void {
  }



  showBasicDialog() {
    this.displayBasic = true;
  }

  configImageTerminado(terminado: boolean) {
    if (terminado) {
      this.displayBasic = false;
      this.imagenUsuario.emit(this.imgUserFile)
    } else {
      this.displayBasic = false;
      this.croppedImage = ''
      this.imagenUsuario.emit('')
    }

  }




  //METODOS EVENTS CROPPERS JS
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.displayBasic = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.imgUserFile = this.imageChangedEvent.target.files[0]
    this.croppedImage = event.base64;
  }

  imageLoaded(image: LoadedImage) {
    console.log(image);
  }

  cropperReady() {
    // cropper ready
    console.log('cropperReady');

  }
  loadImageFailed() {
    // show message
    console.log('loadImageFailed');

  }

}
