import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { RentaDevolucion } from 'src/app/core/models/RentaDevolucion';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { GeneralService } from 'src/app/core/services/general.service';
import { InspeccionService } from 'src/app/core/services/inspeccion.service';
import { RentaDevolucionService } from 'src/app/core/services/renta-devolucion.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { UpdateRentaDTO } from 'src/app/core/models/update-renta-dto';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-renta',
  templateUrl: './add-renta.component.html',
  styleUrls: ['./add-renta.component.scss']
})
export class AddRentaComponent implements OnInit {

  rentaForm !: FormGroup;
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idRenta?: number;
  renta!: RentaDevolucion;
  estadoCombox!: ComboBox[]
  empleadoCombox!: ComboBox[]
  clienteCombox!: ComboBox[]
  vehiculoCombox!: ComboBox[]
  showConfirmarDevuelto: boolean = false
  enableButtonSave:boolean = false

  constructor(
    private toastr: ToastrService,
    private inspeccionService: InspeccionService,
    private router: Router,
    private activedRouted: ActivatedRoute,
    private rentaDevolucionService: RentaDevolucionService,
    private comboBoxService: ComboboxService,
    private generalService: GeneralService
  ) {
    this.idRenta = this.router.getCurrentNavigation()?.extras.state?.['idRenta']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {

    this.rentaForm = this.rentaDevolucionService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox

    this.comboBoxService.getClienteComboBox().subscribe((data) => {
      this.clienteCombox = data
    })
    this.comboBoxService.getEmpleadoCombox().subscribe((data) => {
      this.empleadoCombox = data
    })
    this.comboBoxService.getVehiculoCombox().subscribe((data) => {
      this.vehiculoCombox = data
    })

    if (this.idRenta != undefined) {
      this.rentaDevolucionService.getById(this.idRenta).subscribe((renta: RentaDevolucion) => {
        console.log(renta);
        this.renta = renta
        this.rentaForm.patchValue(renta)


        
        this.rentaForm.get('FechaRenta')?.disable()
        this.rentaForm.get('FechaDevolucion')?.disable()
        this.rentaForm.updateValueAndValidity()

        console.log(this.rentaForm.controls);
        

        this.generalService.setFormatDate(this.rentaForm, 'FechaRenta')
        this.generalService.setFormatDate(this.rentaForm, 'FechaDevolucion')
      })
      this.showConfirmarDevuelto = true
    }

    console.log(this.rentaForm.valid);
    
    this.validateTipoVista()
    this.verificarInspeccionVehiculo()
    this.calcularDiasRentas()

  }

  private verificarInspeccionVehiculo() {

    this.rentaForm.get('IdVehiculo')?.valueChanges.subscribe((idVehiculo) => {
   

      if (idVehiculo) {
        this.inspeccionService.verificarInspeccionVehiculo(idVehiculo).pipe(take(1)).subscribe((inspeccionado: any) => {
          //si el carro no esta inspeccionado
          if (!inspeccionado) {
            Swal.fire('Este vehiculo aun no ha sido inspeccionado')
            this.generalService.disabledControls(this.rentaForm, ['IdCliente', 'IdVehiculo', 'CantidadDias'])

        
          } else {
            if(this.idRenta != undefined) this.generalService.enableControls(this.rentaForm, ['IdCliente', 'IdVehiculo', 'CantidadDias','FechaRenta','FechaDevolucion'])
            else this.generalService.enableControls(this.rentaForm, ['IdCliente', 'IdVehiculo', 'CantidadDias'])
           

          }

        })
      }
    })
  }

  private calcularDiasRentas() {
    this.rentaForm.get('FechaDevolucion')?.valueChanges.subscribe((fechaDevolucion) => {

      let fechaRentaMoment = moment(this.rentaForm.get('FechaRenta')?.value)


      if (fechaRentaMoment != null) {
        let fechaDevolucionMoment = moment(fechaDevolucion)
        let cantidadDias = fechaDevolucionMoment.diff(fechaRentaMoment, "days")
        this.rentaForm.get('CantidadDias')?.setValue(cantidadDias)
      }

    })
  }

  save() {
    console.log(this.rentaForm.value);
    this.rentaForm.patchValue({ confirmarDevolucion: false })
    let data = {
      IdVehiculo: this.rentaForm.get('IdVehiculo')?.value,
      FechaRenta: this.rentaForm.get('FechaRenta')?.value,
      FechaDevolucion: this.rentaForm.get('FechaDevolucion')?.value,
    }

    this.rentaDevolucionService.verificarRenta(data).subscribe((ocupado) => {

      //si no esta disponible
      if (!ocupado) {
        Swal.fire('Este vehiculo no  se puede rentar en las fechas especificadas')
      } else {
        this.rentaDevolucionService.add(this.rentaForm.getRawValue()).subscribe(() => {
          this.rentaForm.reset();
          Swal.fire({
            icon: 'success',
            title: 'Renta guardada',
            showConfirmButton: false,
            timer: 1500
          })
        })
      }
    })


  }
  update() {
    let data = { ...this.renta, ...this.rentaForm.getRawValue() }

    this.rentaDevolucionService.update(data).subscribe((data) => {
      console.log(data);
      
      Swal.fire({
        icon: 'success',
        title: 'Renta Actualizada',
        showConfirmButton: false,
        timer: 1500
      })

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
