import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPersona } from '../models/TipoPersona';

@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      Descripcion: [null, [Validators.required]],
      Estado: [null, [Validators.required]]
    })
  }

  public add(tipoPersona: TipoPersona): Observable<any> {
    return this.http.post(`${environment.rentCarApi}TipoPersona`, tipoPersona)
  }

  public getTipoPersonas():Observable<TipoPersona[]> {
    return this.http.get<TipoPersona[]>(`${environment.rentCarApi}TipoPersona`)
  }

  public getById(idTipoPersona : number){
    return this.http.get(`${environment.rentCarApi}TipoPersona/GetById/${idTipoPersona}`)
  }
  public update(tipoPersona: TipoPersona){
    return this.http.put(`${environment.rentCarApi}TipoPersona/Update`, tipoPersona)
  }
}
