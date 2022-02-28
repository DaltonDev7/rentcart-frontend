import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { ComboxboxService } from '../../../../core/services/comboxbox.service';
import { Combox } from '../../../../core/interfaces/combox';
import { FormService } from '../../../../core/services/form.service';
import { ImagenesPortadaPostService } from 'src/app/core/services/imagenes-portada-post.service';
import { AddRecetasManagerService } from '../../add-recetas/add-recetas-manager.service';
import { DataFormatService } from '../../../../core/services/data-format.service';
import { Store } from '@ngrx/store';
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import { getIdPostReceta } from '../../store';
import { PostService } from '../../services/post.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagenes-post',
  templateUrl: './imagenes-post.component.html',
  styleUrls: ['./imagenes-post.component.scss'],
  providers: [MessageService]
})
export class ImagenesPostComponent implements OnInit {

  @Input() imagenPostForm: FormGroup
  files: string[] = []

  constructor(
    private router :Router,
    private storePostReceta: Store<postRecetasReducer.PostRecetasState>,
    private dataFormatService: DataFormatService,
    private addRecetasManagerServices: AddRecetasManagerService,
    private imagenesPortadaService: ImagenesPortadaPostService,
    private postService: PostService
  ) { }

  ngOnInit(): void {


  }

  capturarImagenesPost(imagenes: string[]) {
    this.files = imagenes
    this.imagenesPortadaService.setImagenesPost(imagenes)
  }

  onSaveImagenes() {
    this.storePostReceta.select((getIdPostReceta)).subscribe((idPost: number) => {

      let imagenesPost = this.dataFormatService.getImagenesPostFormat(idPost)
      this.postService.saveImagenesPost(imagenesPost).subscribe(() => {
        console.log('imagenes guardadas');
        this.router.navigate(['/me'])
      })
    })
  }



}
