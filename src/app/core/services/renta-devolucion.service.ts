import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentaDevolucion } from '../models/RentaDevolucion';
import { UpdateRentaDTO } from '../models/update-renta-dto';
import { ValidateRentaDTO } from '../models/validateRenta';

@Injectable({
  providedIn: 'root'
})
export class RentaDevolucionService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm(): FormGroup {
    return this.fb.group({
      IdCliente: [null, [Validators.required]],
      IdVehiculo: [null, [Validators.required]],
      FechaRenta: [{ value: null, disabled: true }],
      FechaDevolucion: [{ value: null, disabled: true }],
      MontoPorDia: [{ value: null, disabled: true }],
      CantidadPorDia: [{ value: null, disabled: true }],
      CantidadDias: [{ value: null, disabled: true }],
      Comentario: [{ value: null, disabled: true }],
      IdEmpleado: [{ value: null, disabled: true }],
      Estado: [{ value: null, disabled: true }],
      confirmarDevolucion: [null]
    })
  }

  public add(renta: RentaDevolucion): Observable<any> {
    return this.http.post(`${environment.rentCarApi}RentaDevolucion`, renta)
  }
  public verificarRenta(payload: ValidateRentaDTO): Observable<any> {
    return this.http.post(`${environment.rentCarApi}RentaDevolucion/verificarRentaDisponible`, payload)
  }

  public getAll(): Observable<RentaDevolucion[]> {
    return this.http.get<RentaDevolucion[]>(`${environment.rentCarApi}RentaDevolucion`)
  }

  public getById(idrenta: number) {
    return this.http.get(`${environment.rentCarApi}RentaDevolucion/GetById/${idrenta}`)
  }
  public update(renta: RentaDevolucion) {
    return this.http.put(`${environment.rentCarApi}RentaDevolucion/Update`, renta)
  }
  public remove(idrenta?: number) {
    return this.http.delete(`${environment.rentCarApi}RentaDevolucion/remove/${idrenta}`)
  }





}
