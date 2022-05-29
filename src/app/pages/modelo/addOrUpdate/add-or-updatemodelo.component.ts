import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { toastMessage } from 'src/app/core/enums/toastMessage';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { Modelo } from 'src/app/core/models/Modelo';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { ModeloService } from 'src/app/core/services/modelo.service';

@Component({
  selector: 'app-add-or-updatemodelo',
  templateUrl: './add-or-updatemodelo.component.html',
  styleUrls: ['./add-or-updatemodelo.component.scss']
})
export class AddOrUpdatemodeloComponent implements OnInit {


  modeloForm !: FormGroup;
  estadoCombox!: ComboBox[]
  marcaCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idModelo?: number;
  modelo!: Modelo;

  constructor(
    private toastr: ToastrService,
    private modeloService: ModeloService, 
    private comboxService: ComboboxService, 
    private router: Router,) {
    this.idModelo = this.router.getCurrentNavigation()?.extras.state?.['idModelo']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.modeloForm = this.modeloService.getForm()
    this.estadoCombox = this.comboxService.estadoCombox;
    this.comboxService.getMarcasComboBox().subscribe((marcas) => {
      this.marcaCombox = marcas
    })

    if (this.idModelo != undefined) {
      this.modeloService.getById(this.idModelo).subscribe((modelo: Modelo) => {
        this.modelo = modelo
        this.modeloForm.patchValue(modelo)
      })
    }


    this.validateTipoVista()



  }

  save() {
   
    this.modeloService.add(this.modeloForm.value).subscribe(() => {
      this.modeloForm.reset();
      this.toastr.success(toastMessage.saveSuccess);
    })
  }
  
  update() {

    let data = { ...this.modelo, ...this.modeloForm.value }
    this.modeloService.update(data).subscribe(() => {
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
