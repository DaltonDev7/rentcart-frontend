import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Marca } from '../models/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  marca!: Marca

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  getForm() {
    return this.fb.group({
      Descripcion: [null, [Validators.required]],
      Estado: [null, [Validators.required]]
    })
  }

  public add(marca: Marca) {
    return this.http.post(`${environment.rentCarApi}Marcas`, marca)
  }

  public get() {
    return this.http.get(`${environment.rentCarApi}Marcas`)
  }
  public getById(idMarca: number) {
   return this.http.get(`${environment.rentCarApi}Marcas/GetById/${idMarca}`)

  }

  public update(marca: Marca) {
    return this.http.put(`${environment.rentCarApi}Marcas/Update`, marca)
  }

 

}
