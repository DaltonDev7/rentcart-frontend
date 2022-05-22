import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
