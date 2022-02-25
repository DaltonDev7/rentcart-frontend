import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PostRecetaSave } from 'src/app/core/models/post-receta-save.model';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormService } from '../../../core/services/form.service';
import { PostService } from '../services/post.service';
import { DataFormatService } from '../../../core/services/data-format.service';
import { forkJoin } from 'rxjs';

@Injectable()
export class AddRecetasManagerService {

  private mainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private formBuilderService: FormBuilderService,
    private postService: PostService,
    private dataFormatService: DataFormatService
  ) { }


  public setForms() {
    this.mainForm = this.fb.group({
      'postForm': this.formBuilderService.getPostFormBuilder(),
      'pasosRecetasForm': this.formBuilderService.getPasosRecetasFormBuilder(),
      'ingredientesRecetasForm': this.formBuilderService.getIngredientesFormBuilder(),
      'nutricionForm': this.formBuilderService.getNutricionFormBuilder(),
      'imagenesPostForm': this.formBuilderService.getImagenesPostFormBuilder()
    })

    this.formService.setMainForm(this.mainForm)

  }



  save() {

    let payload: PostRecetaSave = {
      PostReceta: this.dataFormatService.getPostData(),
      Ingredientes: this.formService.getIngredientesReecetasForm().value,
      PasosRecetas: this.formService.getPasosRecetasForm().value,
    }
    let imagenesPost = this.dataFormatService.getImagenesPostFormat()

    forkJoin([
      this.postService.saveImagenesPost(imagenesPost),
      this.postService.savePost(payload)
    ]).subscribe(([data, data2])=>{
      console.log(data);
      console.log(data2);
    })


    // this.postService.savePost(payload)

  }


  getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
      if (typeof object[key] !== 'object') formData.append(key, object[key])
      else formData.append(key, JSON.stringify(object[key]))
    })
    return formData;
  }

}
