import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingrediente-recetas',
  templateUrl: './ingrediente-recetas.component.html',
  styleUrls: ['./ingrediente-recetas.component.scss']
})
export class IngredienteRecetasComponent implements OnInit {

  @Input() ingredienteRecetasForm: FormArray

  constructor() { }

  ngOnInit(): void {
  }


  getIngredienteRecetaControlByIndex(index: number): FormControl {
    return this.ingredienteRecetasForm.at(index) as FormControl;
  }

  addIngredienteReceta() {
    this.ingredienteRecetasForm.push(new FormControl(null, Validators.required))
  }

  removeIngredienteRecetaControl(index: number) {
    this.ingredienteRecetasForm.removeAt(index)
  }

}
