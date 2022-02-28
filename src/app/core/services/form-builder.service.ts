import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    private fb: FormBuilder
  ) { }

  getPostFormBuilder() {
    return this.fb.group({
      Titulo: [null, [Validators.required]],
      Descripcion: [null],
      CantidadPersona: [null, [Validators.required]],
      IdNivelDificultad: [null, [Validators.required]],
      IdUsuario: [null]
    })
  }

  getPasosRecetasFormBuilder(): FormArray {
    return new FormArray([
      new FormControl(null, Validators.required) as FormControl
    ])
  }

  getIngredientesFormBuilder(): FormArray {
    return this.fb.array([
      new FormControl(null, Validators.required)
    ])
  }

  getNutricionFormBuilder() {
    return this.fb.group({
      ValorNutricional: [null, Validators.required],
      Calorias: [null],
      Grasas: [null],
      Azucares: [null],
      Proteinas: [null],
      Sodio: [null],
      Carbohidratos: [null],
    })
  }

  getImagenesPostFormBuilder() {
    return this.fb.group({
      SuibrImagenes: [null, Validators.required]
    })
  }

}
