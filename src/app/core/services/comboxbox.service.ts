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

  shortAnswers: Combox[] = [
    {
      id: 1,
      text: 'SI'
    },
    {
      id: 2,
      text: 'NO'
    }
  ]

  nivelDificultad: Combox[] = [
    {
      id: 1,
      text: 'Facil'
    },
    {
      id: 2,
      text: 'Moderado'
    },
    {
      id: 3,
      text: 'Dificil'
    },
    {
      id: 4,
      text: 'Muy dificil'
    },

  ]



}
