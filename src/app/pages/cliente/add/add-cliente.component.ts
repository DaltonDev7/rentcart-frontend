import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { toastMessage } from 'src/app/core/enums/toastMessage';
import { Cliente } from 'src/app/core/models/Cliente';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.scss']
})
export class AddClienteComponent implements OnInit {

  clienteForm !: FormGroup;
  estadoCombox!: ComboBox[]
  tipoPersonaCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idCliente?: number;
  cliente!: Cliente;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private generalService: GeneralService,
    private activedRouted: ActivatedRoute,
    private clienteService: ClienteService,
    private comboBoxService: ComboboxService
  ) {
    this.idCliente = this.router.getCurrentNavigation()?.extras.state?.['idCliente']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.clienteForm = this.clienteService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox
    this.comboBoxService.getTipoPersonaComboBox().subscribe((data) => {
      this.tipoPersonaCombox = data
    })

    console.log(this.idCliente);

    if (this.idCliente != undefined) {
      this.clienteService.getById(this.idCliente).subscribe((cliente: Cliente) => {
        console.log(cliente);
        this.cliente = cliente
        this.clienteForm.patchValue(cliente)
      })
    }


    this.validateTipoVista()

  }

  save() {

    let isValid = this.generalService.isValidCedula(this.clienteForm.get('Cedula')?.value)

    if (isValid) {

      


      this.clienteService.add(this.clienteForm.value).subscribe(() => {
        this.clienteForm.reset();
        this.toastr.success(toastMessage.updateSuccess);
      })
    }else{
      this.toastr.error("Cedula invalida")
    }




  }
  update() {

    let data = { ...this.cliente, ...this.clienteForm.value }

    this.clienteService.update(data).subscribe(() => {
      this.toastr.success(toastMessage.updateSuccess);
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
