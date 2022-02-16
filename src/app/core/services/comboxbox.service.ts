import { Injectable } from '@angular/core';
import { Combox } from '../interfaces/combox';

@Injectable({
  providedIn: 'root'
})
export class ComboxboxService {

  constructor() { }

  sexoCombox: Combox[] = [
    {
      id: 1,
      text: 'Masculino',
    },
    {
      id: 2,
      text: 'Femenino'
    }
  ]

}
