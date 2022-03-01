import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImagenesPortadaPostService } from 'src/app/core/services/imagenes-portada-post.service';
import { DataFormatService } from '../../../../core/services/data-format.service';
import { Store } from '@ngrx/store';
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import { getIdPostReceta } from '../../store';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-imagenes-post',
  templateUrl: './imagenes-post.component.html',
  styleUrls: ['./imagenes-post.component.scss'],
})
export class ImagenesPostComponent implements OnInit {

  @Input() imagenPostForm: FormGroup
  files: string[] = []

  constructor(
    private router: Router,
    private storePostReceta: Store<postRecetasReducer.PostRecetasState>,
    private dataFormatService: DataFormatService,
    private imagenesPortadaService: ImagenesPortadaPostService,
    private postService: PostService,
    private toastr: ToastrService
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
        this.toastr.success('Imagenes guardadas!')
        this.router.navigate(['/me'])
      })
    })
  }



}
