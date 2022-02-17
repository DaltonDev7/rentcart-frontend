import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  @Output() imagenUsuario = new EventEmitter<string>();
  fileToUpload: any;

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
      this.imagenUsuario.emit(this.fileToUpload)
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

    const fileBeforeUpload = this.imageChangedEvent.target.files[0]
    this.croppedImage = event.base64;

    //this.fileToUpload = new File([event.base64], fileBeforeUpload.name, { type: fileBeforeUpload.type })
    this.convertToFile(this.croppedImage, fileBeforeUpload.name, fileBeforeUpload.type).then((data) => {
      this.fileToUpload = data
    })

  }

  imageLoaded(image: LoadedImage) {
    console.log(image);
  }

  cropperReady(image: any) {
    console.log('cropperReady');

  }
  loadImageFailed() {
    console.log('loadImageFailed');
  }


  private convertToFile(url: any, filename: any, mimeType: any) {
    return (fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
  }



}
