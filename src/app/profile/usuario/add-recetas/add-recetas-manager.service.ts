import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PostRecetaSave } from 'src/app/core/models/post-receta-save.model';
import { FormBuilderService } from '../../../core/services/form-builder.service';
import { FormService } from '../../../core/services/form.service';
import { PostService } from '../services/post.service';
import { DataFormatService } from '../../../core/services/data-format.service';
import { forkJoin, Observable } from 'rxjs';
import { PostCreatedDTO } from 'src/app/core/models/post-created-dto.model';
import { Store } from '@ngrx/store';
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import * as postRecetasActions from '../store/post-recetas.actions'
import { getIdPostReceta } from '../store';

@Injectable()
export class AddRecetasManagerService {

  private mainForm: FormGroup;
  private showModal: any;

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private formBuilderService: FormBuilderService,
    private postService: PostService,
    private dataFormatService: DataFormatService,
    private storePostReceta: Store<postRecetasReducer.PostRecetasState>
  ) { }


  public setForms() {
    this.mainForm = this.fb.group({
      'postForm': this.formBuilderService.getPostFormBuilder(),
      'pasosRecetasForm': this.formBuilderService.getPasosRecetasFormBuilder(),
      'ingredientesRecetasForm': this.formBuilderService.getIngredientesFormBuilder(),
      'nutricionForm': this.formBuilderService.getNutricionFormBuilder(),
      // 'imagenesPostForm': this.formBuilderService.getImagenesPostFormBuilder()
    })

    this.formService.setMainForm(this.mainForm)

  }



  public save() {

    let mainForm = this.formService.getMainForm()

    if (mainForm.valid) {

      let payload: PostRecetaSave = {
        PostReceta: this.dataFormatService.getPostData(),
        Ingredientes: this.formService.getIngredientesReecetasForm().value,
        PasosRecetas: this.formService.getPasosRecetasForm().value,
        Nutricion : this.formService.getNutricionRecetaForm().value
      }

      this.storePostReceta.dispatch(postRecetasActions.SavedPost(payload))

    } else {

      this.storePostReceta.dispatch(postRecetasActions.SetPostRecetaCamposRequeridos({ payload: true }))
    }

  }


}
