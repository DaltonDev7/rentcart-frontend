import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { toastMessage } from 'src/app/core/enums/toastMessage';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { Marca } from 'src/app/core/models/Marca';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { MarcaService } from 'src/app/core/services/marca.service';

@Component({
  selector: 'app-add-or-edit-marca',
  templateUrl: './add-or-edit-marca.component.html',
  styleUrls: ['./add-or-edit-marca.component.scss']
})
export class AddOrEditMarcaComponent implements OnInit {

  marcaForm !: FormGroup;
  estadoCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idMarca?: number;
  marca!: Marca;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activedRouted: ActivatedRoute,
    private marcaService: MarcaService,
    private comboBoxService: ComboboxService
  ) {
    this.idMarca = this.router.getCurrentNavigation()?.extras.state?.['idMarca']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']

  }

  ngOnInit(): void {
    this.marcaForm = this.marcaService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox

    if (this.idMarca != undefined) {
      this.marcaService.getById(this.idMarca).subscribe((marca: Marca) => {
        console.log(marca);
        this.marca = marca
        this.marcaForm.patchValue(marca)
      })
    }

    console.log(this.tipoVista);

    this.validateTipoVista()

  }

  save() {
    this.marcaService.add(this.marcaForm.value).subscribe(() => {
      this.marcaForm.reset();
      this.toastr.success(toastMessage.saveSuccess);
    })
  }
  update() {

    let data = { ...this.marca, ...this.marcaForm.value }

    this.marcaService.update(data).subscribe(() => {
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
