import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inspeccion } from '../models/Inspeccion';

@Injectable({
  providedIn: 'root'
})
export class InspeccionService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  getForm() {
    return this.fb.group({
      TieneRayadura: [null, [Validators.required]],
      CantidadCombustible: [null, [Validators.required]],
      TieneGomaRepuesto: [null, [Validators.required]],
      TieneGato: [null, [Validators.required]],
      TieneRoturaCristal: [null, [Validators.required]],
      LlantaA: [null],
      LlantaB: [null],
      LlantaC: [null],
      LlantaD: [null],
      Fecha: [null, [Validators.required]],
      IdVehiculo: [null, [Validators.required]],
      IdCliente: [null, [Validators.required]],
      IdEmpleado: [null, [Validators.required]],
      Estado: [null, [Validators.required]],
    })
  }


  public add(inspeccion: Inspeccion) {
    return this.http.post(`${environment.rentCarApi}Inspeccion`, inspeccion)
  }

  public get(): Observable<Inspeccion[]> {
    return this.http.get<Inspeccion[]>(`${environment.rentCarApi}Inspeccion`)
  }

  public getById(idInspeccion: number) {
    return this.http.get(`${environment.rentCarApi}Inspeccion/GetById/${idInspeccion}`)
  }

  public update(inspeccion: Inspeccion) {
    return this.http.put(`${environment.rentCarApi}Inspeccion/Update`, inspeccion)
  }

  public verificarInspeccionVehiculo(idVehiculo: number){
    return this.http.get(`${environment.rentCarApi}Inspeccion/verificarVehiculoInspeccion/${idVehiculo}`)
  }

  public removeInspeccion(idInspeccion?: number) {
    return this.http.delete(`${environment.rentCarApi}Inspeccion/remove/${idInspeccion}`)
  }


}


