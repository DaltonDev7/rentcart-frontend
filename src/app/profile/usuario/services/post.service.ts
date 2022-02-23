import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable()
export class PostService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  getPostFormBuilder() {
    return this.fb.group({
      Titulo: [null, [Validators.required]],
      Descripcion: [null],
      CantidadPersona: [null, [Validators.required]],
      NivelDificultad: [null, [Validators.required]]
    })
  }

  getPasosRecetasFormBuilder() : FormArray {
    return new FormArray([
      new FormControl(null, Validators.required) as FormControl
    ])
  }

  getIngredientesFormBuilder() {
    return this.fb.array([
      new FormControl(null, Validators.required)
    ])
  }


}
