import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoVehiculo } from '../models/TipoVehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      Descripcion: [null, [Validators.required]],
      Estado: [null, [Validators.required]]
    })
  }

  public add(tipoVehiculo: TipoVehiculo): Observable<any> {
    return this.http.post(`${environment.rentCarApi}TipoVehiculo`, tipoVehiculo)
  }

  public getAll(): Observable<TipoVehiculo[]> {
    return this.http.get<TipoVehiculo[]>(`${environment.rentCarApi}TipoVehiculo`)
  }

  public getById(idtipoVehiculo: number) {
    return this.http.get(`${environment.rentCarApi}TipoVehiculo/GetById/${idtipoVehiculo}`)
  }
  public remove(idTipoVehiculo?: number) {
    return this.http.delete(`${environment.rentCarApi}TipoVehiculo/remove/${idTipoVehiculo}`)
  }
  public update(tipoVehiculo: TipoVehiculo) {
    return this.http.put(`${environment.rentCarApi}TipoVehiculo/Update`, tipoVehiculo)
  }
}
