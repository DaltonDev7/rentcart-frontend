import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Modelo } from '../models/Modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      IdMarca: [null, [Validators.required]],
      Descripcion: [null, [Validators.required]],
      Estado: [null, [Validators.required]]
    })
  }

  public getAll() {
    return this.http.get(`${environment.rentCarApi}Modelo`)
  }
  public update(modelo: Modelo) {
    return this.http.put(`${environment.rentCarApi}Modelo`, modelo)
  }
  public add(modelo: Modelo) {
    return this.http.post(`${environment.rentCarApi}Modelo`, modelo)
  }
  public remove(idmodelo ?: number){
    return this.http.delete(`${environment.rentCarApi}Modelo/remove/${idmodelo}`)
  }
  public getById(IdModelo: number) {
    return this.http.get(`${environment.rentCarApi}Modelo/getById/${IdModelo}`)
  }



}
