import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService{

  private mainForm: FormGroup;

  constructor() { }

  setMainForm(form: FormGroup) {
    this.mainForm = form
  }

  public getMainForm() {
    return this.mainForm
  }

  public getPostForm() {
    return this.mainForm.get('postForm') as FormGroup
  }

  public getPasosRecetasForm() {
    return this.mainForm.get('pasosRecetasForm') as FormArray
  }

  public getIngredientesReecetasForm() {
    return this.mainForm.get('ingredientesRecetasForm') as FormArray
  }

  public getNutricionRecetaForm() {
    return this.mainForm.get('nutricionForm') as FormGroup
  }

  public getImagenesPostForm() {
    return this.mainForm.get('imagenesPostForm') as FormGroup
  }


}
