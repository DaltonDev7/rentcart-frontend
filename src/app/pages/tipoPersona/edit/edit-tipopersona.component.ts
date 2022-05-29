import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { TipoPersona } from 'src/app/core/models/TipoPersona';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { TipoPersonaService } from 'src/app/core/services/tipo-persona.service';

@Component({
  selector: 'app-edit-tipopersona',
  templateUrl: './edit-tipopersona.component.html',
  styleUrls: ['./edit-tipopersona.component.scss']
})
export class EditTipopersonaComponent implements OnInit {

  tipoPersona !: TipoPersona
  tipoPersonaForm!: FormGroup
  estadoCombox!:ComboBox[]

  constructor(
    private router : Router,
    private tipoPersonaService: TipoPersonaService, 
    private activedRoute: ActivatedRoute, 
    private comboBox: ComboboxService) { }

  ngOnInit(): void {
    this.tipoPersonaForm = this.tipoPersonaService.getForm()
    this.estadoCombox = this.comboBox.estadoCombox
    this.activedRoute.data.subscribe((data: any) => {
      console.log(data.TipoPersona);

      this.tipoPersona = data.tipoPersona
      this.tipoPersonaForm.patchValue(this.tipoPersona)
    })



  }

  update() {
    let tipoPersona = { ...this.tipoPersona, ...this.tipoPersonaForm.value }

    this.tipoPersonaService.update(tipoPersona).subscribe((data) => {
      this.tipoPersonaForm.reset();
      this.router.navigate(['/renta/tipoPersona'])
      console.log('actualizado');
    })

  }

}
