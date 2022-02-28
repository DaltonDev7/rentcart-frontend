import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormService } from './form.service';
import * as fromApp from 'src/app/state/app.state';
import { getIdCurrentUser } from 'src/app/authentication/store';
import { ImagenesPortadaPostService } from './imagenes-portada-post.service';

@Injectable({
  providedIn: 'root'
})
export class DataFormatService {

  constructor(
    private store: Store<fromApp.State>,
    private formService: FormService,
    private imagenesPortadaPostService: ImagenesPortadaPostService
  ) { }

  private getIdUserActual() {
    return this.store.select(getIdCurrentUser)
  }

  getPostData() {

    let idUser;
    this.getIdUserActual().subscribe((IdUsuario: number) => {
      idUser = IdUsuario
    })

    let postFormValue = this.formService.getPostForm().value

    return {
      ...postFormValue,
      IdUsuario: idUser
    }
  }

  getImagenesPostFormat(IdPost: number) {
    let imagenes: string[] = this.imagenesPortadaPostService.getImagenesPost()
    let formData = new FormData();

    imagenes.forEach((item) => {
      formData.append('file', item)
    })

    formData.append('IdPost', IdPost.toString())
    return formData
  }

}
