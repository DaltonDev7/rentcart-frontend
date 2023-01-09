import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getForm() {
    return this.fb.group({
      Nombres: [null, [Validators.required]],
      Apellidos: [null, [Validators.required]],
      Cedula: [null, [Validators.required]],
      TandaLabor: [null, [Validators.required]],
      PorcientoComision: [null, [Validators.required]],
      FechaIngreso: [null, [Validators.required]],
      Estado: [null, [Validators.required]],
    })
  }

  add(empleado: Empleado) {
    return this.http.post(`${environment.rentCarApi}Empleado`, empleado)
  }

  update(empleado: Empleado) {
    return this.http.put(`${environment.rentCarApi}Empleado/Update`, empleado)
  }

  getById(Idempleado: number) {
    return this.http.get(`${environment.rentCarApi}Empleado/GetById/${Idempleado}`)
  }

  remove(Idempleado?: number) {
    return this.http.delete(`${environment.rentCarApi}Empleado/remove/${Idempleado}`)
  }

  getAll() {
    return this.http.get(`${environment.rentCarApi}Empleado`)
  }

  existeEmpleado(cedula: string) {
    return this.http.get(`${environment.rentCarApi}Empleado/existeEmpleado/${cedula}`)
  }


}
