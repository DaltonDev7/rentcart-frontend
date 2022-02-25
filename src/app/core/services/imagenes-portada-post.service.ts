import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesPortadaPostService {

  private imagenesPost: string[] = []

  constructor() { }

  setImagenesPost(imagenes: string[]) {
    this.imagenesPost = imagenes
    console.log(this.imagenesPost);
  }

  getImagenesPost(){
    return this.imagenesPost
  }

}
