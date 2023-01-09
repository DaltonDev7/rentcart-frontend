import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { TipoVehiculo } from 'src/app/core/models/TipoVehiculo';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { TipoVehiculoService } from 'src/app/core/services/tipo-vehiculo.service';

@Component({
  selector: 'app-add-or-edit-tipo-vehiculo',
  templateUrl: './add-or-edit-tipo-vehiculo.component.html',
  styleUrls: ['./add-or-edit-tipo-vehiculo.component.scss']
})
export class AddOrEditTipoVehiculoComponent implements OnInit {

  tipoVehiculoForm !: FormGroup;
  estadoCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idTipoVehiculo?: number;
  tipoVehiculo!: TipoVehiculo;

  constructor(
    private toast: ToastrService,
    private router: Router,
    private activedRouted: ActivatedRoute,
    private tipoVehiculoService: TipoVehiculoService,
    private comboBoxService: ComboboxService
  ) { 
    this.idTipoVehiculo = this.router.getCurrentNavigation()?.extras.state?.['idTipoVehiculo']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.tipoVehiculoForm = this.tipoVehiculoService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox

    if (this.idTipoVehiculo != undefined) {
      this.tipoVehiculoService.getById(this.idTipoVehiculo).subscribe((tipoVehiculo: TipoVehiculo) => {
        console.log(tipoVehiculo);
        this.tipoVehiculo = tipoVehiculo
        this.tipoVehiculoForm.patchValue(tipoVehiculo)
      })
    }

    console.log(this.tipoVista);

    this.validateTipoVista()
  }

  save() {
    this.tipoVehiculoService.add(this.tipoVehiculoForm.value).subscribe(() => {
      this.tipoVehiculoForm.reset();
      this.toast.success('Guardado')
    })
  }
  update() {

    let data = { ...this.tipoVehiculo, ...this.tipoVehiculoForm.value }

    this.tipoVehiculoService.update(data).subscribe(() => {
      this.toast.success('Actualizado')
      
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

}
