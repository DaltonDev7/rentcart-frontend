import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from '../models/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getForms() {
    return this.fb.group({
      Descripcion: [null, [Validators.required]],
      NoChasis: [null, [Validators.required]],
      NoMotor: [null, [Validators.required]],
      NoPlaca: [null, [Validators.required]],
      IdTipoVehiculo: [null, [Validators.required]],
      IdTipoCombustible: [null],
      IdMarca: [null, [Validators.required]],
      IdModelo: [{ value: null , disabled: true}],
      Estado: [null, [Validators.required]],
    })
  }

  public add(vehiculo: Vehiculo): Observable<any> {
    return this.http.post(`${environment.rentCarApi}Vehiculo`, vehiculo)
  }

  public getAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${environment.rentCarApi}Vehiculo`)
  }

  public getById(idVehiculo: number) {
    return this.http.get(`${environment.rentCarApi}Vehiculo/GetById/${idVehiculo}`)
  }
  public update(vehiculo: Vehiculo) {
    return this.http.put(`${environment.rentCarApi}Vehiculo/Update`, vehiculo)
  }

}
