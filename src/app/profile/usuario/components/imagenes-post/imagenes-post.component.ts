import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ComboxboxService } from '../../../../core/services/comboxbox.service';
import { Combox } from '../../../../core/interfaces/combox';
import { FormService } from '../../../../core/services/form.service';
import { ImagenesPortadaPostService } from 'src/app/core/services/imagenes-portada-post.service';

@Component({
  selector: 'app-imagenes-post',
  templateUrl: './imagenes-post.component.html',
  styleUrls: ['./imagenes-post.component.scss']
})
export class ImagenesPostComponent implements OnInit {

  @Input() imagenPostForm: FormGroup
  shortAnswers: Combox[] = []
  showUploadPost: boolean = false

  constructor(
    private imagenesPortadaService :  ImagenesPortadaPostService,
    private comboxServices: ComboxboxService
    ) { }

  ngOnInit(): void {
    this.shortAnswers = this.comboxServices.shortAnswers
    this.validateShowUploadImagenes()
  }

  capturarImagenesPost(imagenes: string[]) {
    this.imagenesPortadaService.setImagenesPost(imagenes)
  }

  validateShowUploadImagenes() {
    this.imagenPostForm.get('SuibrImagenes').valueChanges.subscribe((data) => {
      if (data == 1) this.showUploadPost = true
      else this.showUploadPost = false
    })
  }

}
