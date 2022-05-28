import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { Vehiculo } from 'src/app/core/models/Vehiculo';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { GeneralService } from 'src/app/core/services/general.service';
import { VehiculoService } from 'src/app/core/services/vehiculo.service';

@Component({
  selector: 'app-add-or-edit-vehiculo',
  templateUrl: './add-or-edit-vehiculo.component.html',
  styleUrls: ['./add-or-edit-vehiculo.component.scss']
})
export class AddOrEditVehiculoComponent implements OnInit {

  vehiculoForm !: FormGroup;
  estadoCombox!: ComboBox[]
  modeloCombox!: ComboBox[]
  marcaCombox!: ComboBox[]
  tipoVehiculoCombox!: ComboBox[]
  tipoCombustibleCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idVehiculo?: number;
  vehiculo!: Vehiculo;


  constructor(
    private router: Router,
    private vehiculoService: VehiculoService,
    private comboBoxService: ComboboxService,
    private generalService: GeneralService
  ) {
    this.idVehiculo = this.router.getCurrentNavigation()?.extras.state?.['idVehiculo']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.vehiculoForm = this.vehiculoService.getForms()
    this.estadoCombox = this.comboBoxService.estadoCombox

    this.comboBoxService.getTipoCombustibleComboBox().subscribe((data) => {
      this.tipoCombustibleCombox = data
    })

    this.comboBoxService.getTipoVehiculoComboBox().subscribe((data) => {
      this.tipoVehiculoCombox = data
    })

    this.comboBoxService.getMarcasComboBox().subscribe((data) => {
      this.marcaCombox = data
    })

    this.validateComboxModelo()

    if (this.idVehiculo != undefined) {
      this.vehiculoService.getById(this.idVehiculo).subscribe((vehiculo: Vehiculo) => {
        console.log(vehiculo);
        this.vehiculo = vehiculo
        this.vehiculoForm.patchValue(vehiculo)
      })
    }

    this.validateTipoVista()

  }


  save() {
    console.log(this.vehiculoForm.value);

    this.vehiculoService.add(this.vehiculoForm.value).subscribe(() => {
      this.vehiculoForm.reset();
      console.log('guardado');

    })
  }
  update() {

    let data = { ...this.vehiculo, ...this.vehiculoForm.value }

    this.vehiculoService.update(data).subscribe(() => {
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

  validateComboxModelo() {
    this.vehiculoForm.get('IdMarca')?.valueChanges.subscribe((idMarca) => {
      if (idMarca) {

        this.comboBoxService.getModelosByIdMarca(idMarca).subscribe((modelos) => {
          this.modeloCombox = modelos
          this.vehiculoForm.get('IdModelo')?.enable()
          this.vehiculoForm.get('IdModelo')?.setValidators(Validators.required)
          this.vehiculoForm.get('IdModelo')?.setValue(null)
          this.vehiculoForm.get('IdModelo')?.updateValueAndValidity()

        })

      }
    })
  }



}
