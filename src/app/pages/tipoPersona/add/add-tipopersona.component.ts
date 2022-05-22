import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { TipoPersonaService } from 'src/app/core/services/tipo-persona.service';

@Component({
  selector: 'app-add-tipopersona',
  templateUrl: './add-tipopersona.component.html',
  styleUrls: ['./add-tipopersona.component.scss']
})
export class AddTipopersonaComponent implements OnInit {

  estadoCombox: ComboBox[] = []
  tipoPersonaForm!: FormGroup;

  constructor(private comboxSerive: ComboboxService, private tipoPersonaService: TipoPersonaService) { }

  ngOnInit(): void {
    this.tipoPersonaForm = this.tipoPersonaService.getForm()
    this.estadoCombox = this.comboxSerive.estadoCombox
  }

  save() {
    this.tipoPersonaService.add(this.tipoPersonaForm.value).subscribe(() => {
      this.tipoPersonaForm.reset();
      console.log('guardado');
    })
  }

}
