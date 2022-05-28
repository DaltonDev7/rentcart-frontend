import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComboBox, ComboxCombustible, ComboxRespuestaCorta } from '../models/Comboxbox';

@Injectable({
  providedIn: 'root'
})
export class ComboboxService {

  constructor(private http: HttpClient) { }

  estadoCombox: ComboBox[] = [
    {
      id: 1,
      text: 'Activo'
    },
    {
      id: 2,
      text: 'Inactivo'
    }
  ]

  respuestaCorta: ComboxRespuestaCorta[] = [
    {
      id: true,
      text: 'Si'
    },
    {
      id: false,
      text: 'No'
    }
  ]

  combustibleCombox: ComboxCombustible[] = [
    {
      id: "1/4",
      text: "1/4"
    },
    {
      id: "1/2",
      text: "1/2"
    },
    {
      id: "3/4",
      text: "3/4"
    },
    {
      id: "Lleno",
      text: "Lleno"
    }
  ]


  tandaCombox: any[] = [
    {
      id: "Matutina",
      text: "Matutina"
    },
    {
      id: "Vespertina",
      text: "Vespertina"
    },
    {
      id: "Nocturna",
      text: "Nocturna"
    },
  ]

  public getClienteComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/Cliente`)
  }

  public getMarcasComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/Marca`)
  }

  public getTipoPersonaComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/TipoPersona`)
  }

  public getTipoVehiculoComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/TipoVehiculo`)
  }

  public getModeloComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/Modelo`)
  }

  public getTipoCombustibleComboBox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/TipoCombustible`)
  }

  public getEmpleadoCombox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/Empleado`)
  }

  public getVehiculoCombox(): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/Vehiculo`)
  }

  public getModelosByIdMarca(idMarca: number): Observable<ComboBox[]> {
    return this.http.get<ComboBox[]>(`${environment.rentCarApi}ComboxBox/GetModelosByMarca/${idMarca}`)
  }





}
