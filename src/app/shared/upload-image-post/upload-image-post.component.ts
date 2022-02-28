import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-image-post',
  templateUrl: './upload-image-post.component.html',
  styleUrls: ['./upload-image-post.component.scss']
})
export class UploadImagePostComponent implements OnInit {

  @Output() imagenesPost = new EventEmitter<any[]>();


  filesToUpload: any[5] = [];
  filesToShow: any[5] = []
  imagenSelect: any

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

      let reader = new FileReader()
      reader.readAsDataURL(this.imagenSelect)
      reader.onload = (event) => {
        this.filesToUpload.push(this.imagenSelect)
        this.filesToShow.push(event.target.result)
        this.imagenesPost.emit(this.filesToUpload)
      }


    } else {
      this.displayBasic = false;
      this.croppedImage = ''
      this.imagenesPost.emit([])
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
      this.imagenSelect = data
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

  eliminarFoto(index: number) {
    this.filesToUpload.splice(index, 1)
    this.filesToShow.splice(index, 1)
    this.imagenesPost.emit(this.filesToUpload)
  }


  private convertToFile(url: any, filename: any, mimeType: any) {
    return (fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
  }

}
