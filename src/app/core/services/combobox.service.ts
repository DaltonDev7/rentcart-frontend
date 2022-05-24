import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ComboBox } from '../models/Comboxbox';

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





}
