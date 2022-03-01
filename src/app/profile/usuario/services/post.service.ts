import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PostRecetaSave } from 'src/app/core/models/post-receta-save.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {


  attachementHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  savePost(payload: PostRecetaSave) {
    return this.http.post<any>(`${environment.foodApp}/postreceta/Save`, payload)
  }

  saveImagenesPost(payload: FormData) {
    return this.http.post<any>(`${environment.foodApp}/postreceta/SaveImagenesPost`, payload, this.attachementHeaders)
  }

  getPostByIdUser(IdUser:number){
    return this.http.get<any>(`${environment.foodApp}/postreceta/GetPostByUser/${IdUser}`)
  }


}
