import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pasos-recetas',
  templateUrl: './pasos-recetas.component.html',
  styleUrls: ['./pasos-recetas.component.scss']
})
export class PasosRecetasComponent implements OnInit {

  @Input() pasosRecetaForm: FormArray

  constructor() { }

  ngOnInit(): void {
  }



  addPasosRecetas() {
    this.pasosRecetaForm.push(new FormControl(null, Validators.required))
  }

  removePasoRecetaControl(index: number) {
    this.pasosRecetaForm.removeAt(index)
  }

  getPasoRecetaControlByIndex(index: number): FormControl {
    return this.pasosRecetaForm.at(index) as FormControl;
  }


}
