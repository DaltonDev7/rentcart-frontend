import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getForm() {
    return this.fb.group({
      Nombres: [null, [Validators.required]],
      Apellidos: [null, [Validators.required]],
      Cedula: [null, [Validators.required]],
      NoTarjetaCR: [null, [Validators.required]],
      LimiteCredito: [null, [Validators.required]],
      IdTipoPersona: [null, [Validators.required]],
      Estado: [null, [Validators.required]],
    })
  }

  add(cliente: Cliente) {
    console.log(cliente);
    
    return this.http.post(`${environment.rentCarApi}Cliente`, cliente)
  }
  update(cliente: Cliente) {
    return this.http.put(`${environment.rentCarApi}Cliente/Update`, cliente)
  }
  getById(IdCliente: number) {
    return this.http.get(`${environment.rentCarApi}Cliente/GetById/${IdCliente}`)
  }

  getAll() {
    return this.http.get(`${environment.rentCarApi}Cliente`)
  }

  remove(IdCliente?: number) {
    return this.http.delete(`${environment.rentCarApi}Cliente/remove/${IdCliente}`)
  }

}
