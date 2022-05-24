import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/Cliente';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ComboboxService } from 'src/app/core/services/combobox.service';

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
    private router: Router,
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
    this.comboBoxService.getTipoPersonaComboBox().subscribe((data)=>{
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
    this.clienteService.add(this.clienteForm.value).subscribe(() => {
      this.clienteForm.reset();
      console.log('guardado');

    })
  }
  update() {

    let data = { ...this.cliente, ...this.clienteForm.value }

    this.clienteService.update(data).subscribe(() => {
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
