import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { Empleado } from 'src/app/core/models/Empleado';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { EmpleadoService } from 'src/app/core/services/empleado.service';
import { GeneralService } from 'src/app/core/services/general.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent implements OnInit {

  empleadoForm !: FormGroup;
  estadoCombox!: ComboBox[]
  tandaCombox!: any[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idEmpleado?: number;
  empleado!: Empleado;

  constructor(
    private router: Router,
    private activedRouted: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private comboBoxService: ComboboxService,
    private generalService : GeneralService
  ) {
    this.idEmpleado = this.router.getCurrentNavigation()?.extras.state?.['idEmpleado']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.empleadoForm = this.empleadoService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox
    this.tandaCombox = this.comboBoxService.tandaCombox

    if (this.idEmpleado != undefined) {
      this.empleadoService.getById(this.idEmpleado).subscribe((empleado: Empleado) => {
        console.log(empleado);
        this.empleado = empleado
        this.empleadoForm.patchValue(empleado)

        this.generalService.setFormatDate(this.empleadoForm , 'FechaIngreso')
      })
    }

    
    this.validateTipoVista()

  }

  save() {
    console.log(this.empleadoForm.value);

    this.empleadoService.add(this.empleadoForm.value).subscribe(() => {
      this.empleadoForm.reset();
      console.log('guardado');

    })
  }
  update() {

    let data = { ...this.empleado, ...this.empleadoForm.value }
    console.log(data);
    
    this.empleadoService.update(data).subscribe(() => {
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

}
