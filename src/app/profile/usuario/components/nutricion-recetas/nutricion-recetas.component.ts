import { Component, Input, OnInit } from '@angular/core';
import { Combox } from 'src/app/core/interfaces/combox';
import { ComboxboxService } from 'src/app/core/services/comboxbox.service';
import { FormGroup } from '@angular/forms';
import { FormManagerService } from '../../../../core/services/form-manager.service';


@Component({
  selector: 'app-nutricion-recetas',
  templateUrl: './nutricion-recetas.component.html',
  styleUrls: ['./nutricion-recetas.component.scss']
})
export class NutricionRecetasComponent implements OnInit {

  //atributos
  @Input() nutricionForm: FormGroup
  valorNutricional: boolean = false
  shortAnswers: Combox[] = []


  constructor(private comboxService: ComboxboxService, private formManagerService: FormManagerService) { }

  ngOnInit(): void {
    this.shortAnswers = this.comboxService.shortAnswers
    this.validateNutricion()
  }


  private validateNutricion() {
    this.nutricionForm.get('ValorNutricional').valueChanges.subscribe((valor: number) => {
      if (valor == 1) {
        this.valorNutricional = true
        this.formManagerService.setRequeridoForm(this.nutricionForm)
      } else {
        this.valorNutricional = false
        this.formManagerService.clearFormValidator(this.nutricionForm, ['ValorNutricional'])
        this.formManagerService.updateValueAndValidityForm(this.nutricionForm, ['ValorNutricional'])
        this.formManagerService.clearValueForms(this.nutricionForm, ['ValorNutricional'])
      }
    })
  }


}
