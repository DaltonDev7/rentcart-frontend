import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormBuilderService } from '../../../core/services/form-builder.service';

@Injectable()
export class AddRecetasManagerService {

  private mainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formBuilderService: FormBuilderService,
  ) { }


  public setForms() {
    this.mainForm = this.fb.group({
      'postForm': this.formBuilderService.getPostFormBuilder(),
      'pasosRecetasForm': this.formBuilderService.getPasosRecetasFormBuilder(),
      'ingredientesRecetasForm': this.formBuilderService.getIngredientesFormBuilder(),
      'nutricionForm' : this.formBuilderService.getNutricionFormBuilder()
    })
  }

  public getMainForm() {
    return this.mainForm
  }

  public getPostForm(){
    return this.mainForm.get('postForm') as FormGroup
  }

  public getPasosRecetasForm(){
    return this.mainForm.get('pasosRecetasForm') as FormArray
  }

  public getIngredientesReecetasForm(){
    return this.mainForm.get('ingredientesRecetasForm') as FormArray
  }

  public getNutricionRecetaForm(){
    return this.mainForm.get('nutricionForm') as FormGroup
  }




  save(){
    console.log(this.getNutricionRecetaForm().value);
    console.log(this.getPostForm().value);
    console.log(this.getPasosRecetasForm().value);
    console.log(this.getIngredientesReecetasForm().value);
    
  }

}
