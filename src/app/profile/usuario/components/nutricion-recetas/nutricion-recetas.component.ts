import { Component, Input, OnInit } from '@angular/core';
import { Combox } from 'src/app/core/interfaces/combox';
import { ComboxboxService } from 'src/app/core/services/comboxbox.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nutricion-recetas',
  templateUrl: './nutricion-recetas.component.html',
  styleUrls: ['./nutricion-recetas.component.scss']
})
export class NutricionRecetasComponent implements OnInit {

  //atributos
  @Input() nutricionForm: FormGroup
  valorNutricional:boolean = false
  shortAnswers: Combox[] = []


  constructor(private comboxService: ComboxboxService) { }

  ngOnInit(): void {
    this.shortAnswers = this.comboxService.shortAnswers
    this.validateNutricion()
  }


  private validateNutricion(){
    this.nutricionForm.get('ValorNutricional').valueChanges.subscribe((valor:number)=>{
      if(valor == 1){
        
      }
    })
  }


}
