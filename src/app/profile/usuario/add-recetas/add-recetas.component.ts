import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/services/form.service';
import { AddRecetasManagerService } from './add-recetas-manager.service';
import { Store } from '@ngrx/store';
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import * as postRecetasActions from 'src/app/profile/usuario/store/post-recetas.actions'
import { getPostSaved, getPostRecetasCamposRequerido } from '../store/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recetas',
  templateUrl: './add-recetas.component.html',
  styleUrls: ['./add-recetas.component.scss']
})
export class AddRecetasComponent implements OnInit {


  displayModalRequeridos: boolean = false
  displayModalSavedPost: boolean = false
  showPostForm: boolean = true

  constructor(
    private router: Router,
    public formService: FormService,
    public addRecetasManagerServices: AddRecetasManagerService,
    private storePostRecetas: Store<postRecetasReducer.PostRecetasState>
  ) { }

  ngOnInit(): void {
    this.addRecetasManagerServices.setForms();


    this.storePostRecetas.select((getPostSaved)).subscribe((data) => {
      this.displayModalSavedPost = data
    })

    this.storePostRecetas.select((getPostRecetasCamposRequerido)).subscribe((data) => {
      this.displayModalRequeridos = data
    })
  }

  onSave() {
    this.addRecetasManagerServices.save()
  }


  cerrarModalRequeridos() {
    this.storePostRecetas.dispatch(postRecetasActions.SetPostRecetaCamposRequeridos({ payload: false }))
  }

  saveImagenes(cerrar: boolean) {
    this.storePostRecetas.dispatch(postRecetasActions.SetPostRecetaSaved({ payload: false }))
    cerrar == true ? this.showPostForm = false :  this.router.navigate(['/me'])
  }

}
