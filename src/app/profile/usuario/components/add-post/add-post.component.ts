import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { LOGIN_ERROR } from '../../../../authentication/store/auth.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup
  pasosReceta: FormArray
  ingredientesReceta: FormArray

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postForm = this.postService.getPostFormBuilder()
    this.pasosReceta = this.postService.getPasosRecetasFormBuilder()
    this.ingredientesReceta = this.postService.getIngredientesFormBuilder()

  }


  getPasoRecetaControlByIndex(index: number): FormControl {
    return this.pasosReceta.at(index) as FormControl;
  }

  getIngredienteRecetaControlByIndex(index: number): FormControl {
    return this.ingredientesReceta.at(index) as FormControl;
  }

  addPasosRecetas() {
    this.pasosReceta.push(new FormControl(null, Validators.required))
    console.log(this.pasosReceta.value);
    
  }

  addIngredienteReceta() {
    this.ingredientesReceta.push(new FormControl(null, Validators.required))
    console.log(this.ingredientesReceta.value);
    
  }

  removePasoRecetaControl(index: number) {
    console.log(index);
    this.pasosReceta.removeAt(index)
  }

  removeIngredienteRecetaControl(index: number){
    this.ingredientesReceta.removeAt(index)
  }

}
