import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoCombustible } from '../models/TipoCombustible';
import { TipoVehiculo } from '../models/TipoVehiculo';

@Injectable({
  providedIn: 'root'
})
export class TipoCombustibleService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      Descripcion: [null, [Validators.required]],
      Estado: [null, [Validators.required]]
    })
  }

  public add(tipoVehiculo: TipoCombustible): Observable<any> {
    return this.http.post(`${environment.rentCarApi}TipoCombustible`, tipoVehiculo)
  }

  public getAll(): Observable<TipoCombustible[]> {
    return this.http.get<TipoVehiculo[]>(`${environment.rentCarApi}TipoCombustible`)
  }
  public remove(idtipo?: number) {
    return this.http.delete(`${environment.rentCarApi}TipoCombustible/remove/${idtipo}`)
  }

  public getById(idtipoVehiculo?: number) {
    return this.http.get(`${environment.rentCarApi}TipoCombustible/GetById/${idtipoVehiculo}`)
  }
  public update(tipoVehiculo: TipoVehiculo) {
    return this.http.put(`${environment.rentCarApi}TipoCombustible/Update`, tipoVehiculo)
  }
}
