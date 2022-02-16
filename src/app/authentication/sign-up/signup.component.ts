import { Component, OnInit } from '@angular/core';
import { ComboxboxService } from '../../core/services/comboxbox.service';
import { Combox } from '../../core/interfaces/combox';
import { LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  password!: string;
  sexoCombox: Combox[] = []

  showImagenUpload: boolean = false
  fotoTransformada: any

  constructor(private comboxService: ComboxboxService) { }

  ngOnInit(): void {
    this.sexoCombox = this.comboxService.sexoCombox
  }


  checkValue(): void {
    this.showImagenUpload = !this.showImagenUpload
  }

  capturarImagenUsuario(valor:any){
    console.log(valor);
  }



}
