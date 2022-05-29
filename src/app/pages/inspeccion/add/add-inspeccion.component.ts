import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ComboBox, ComboxCombustible, ComboxRespuestaCorta } from 'src/app/core/models/Comboxbox';
import { Inspeccion } from 'src/app/core/models/Inspeccion';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { GeneralService } from 'src/app/core/services/general.service';
import { InspeccionService } from 'src/app/core/services/inspeccion.service';

@Component({
  selector: 'app-add-inspeccion',
  templateUrl: './add-inspeccion.component.html',
  styleUrls: ['./add-inspeccion.component.scss']
})
export class AddInspeccionComponent implements OnInit {

  inspeccionForm !: FormGroup;
  estadoCombox!: ComboBox[]
  respuestaCortaCombox!: ComboxRespuestaCorta[]
  clienteCombox!: ComboBox[]
  vehiculoCombox!: ComboBox[]
  empleadoCombox!: ComboBox[]
  cantidadCombustible!: ComboxCombustible[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idModelo?: number;
  inspeccion!: Inspeccion;

  constructor(private inspeccionService: InspeccionService, private comboxService: ComboboxService, private router: Router, private generalService: GeneralService) {
    this.idModelo = this.router.getCurrentNavigation()?.extras.state?.['idInspeccion']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }
  ngOnInit(): void {

    this.inspeccionForm = this.inspeccionService.getForm()
    this.setComboBox();

    if (this.idModelo != undefined) {
      this.inspeccionService.getById(this.idModelo).subscribe((inspeccion: Inspeccion) => {
        console.log(inspeccion);

        this.inspeccion = inspeccion
        this.inspeccionForm.patchValue(inspeccion)
        this.generalService.setFormatDate(this.inspeccionForm, 'Fecha')
      })
    }


    this.validateTipoVista()
  }

  save() {
    this.generalService.validateChecbox(this.inspeccionForm)
    console.log(this.inspeccionForm.value);
    this.inspeccionService.add(this.inspeccionForm.value).subscribe(() => {
      this.inspeccionForm.reset();
      console.log('guardado');
    })
  }

  update() {
    let data = { ...this.inspeccion, ...this.inspeccionForm.value }
    this.inspeccionService.update(data).subscribe(() => {
      console.log('actualizado');
    })
  }

  private validateTipoVista() {
    if (this.tipoVista === 'add') {
      this.title = 'Crear'
      this.validateVista = true
    } else {
      this.title = 'Editar'
      this.validateVista = false
    }
  }


  private setComboBox() {
    this.comboxService.getClienteComboBox().subscribe((data) => {
      this.clienteCombox = data
    })
    this.comboxService.getVehiculoCombox().subscribe((data) => {
      this.vehiculoCombox = data
    })
    this.comboxService.getEmpleadoCombox().subscribe((data) => {
      this.empleadoCombox = data
    })
    this.respuestaCortaCombox = this.comboxService.respuestaCorta
    this.estadoCombox = this.comboxService.estadoCombox
    this.cantidadCombustible = this.comboxService.combustibleCombox
  }

}
