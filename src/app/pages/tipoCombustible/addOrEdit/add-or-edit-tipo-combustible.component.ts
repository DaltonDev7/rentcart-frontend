import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { TipoCombustible } from 'src/app/core/models/TipoCombustible';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { TipoCombustibleService } from 'src/app/core/services/tipo-combustible.service';

@Component({
  selector: 'app-add-or-edit-tipo-combustible',
  templateUrl: './add-or-edit-tipo-combustible.component.html',
  styleUrls: ['./add-or-edit-tipo-combustible.component.scss']
})
export class AddOrEditTipoCombustibleComponent implements OnInit {

  tipoCombustibleForm !: FormGroup;
  estadoCombox!: ComboBox[]
  tipoVista!: any;
  validateVista: boolean = false
  title: string = ''
  idTipoCombustible?: number;
  tipoCombustible!: TipoCombustible;

  constructor(
    private router: Router,
    private activedRouted: ActivatedRoute,
    private tipoCombustibleService: TipoCombustibleService,
    private comboBoxService: ComboboxService
  ) {
    this.idTipoCombustible = this.router.getCurrentNavigation()?.extras.state?.['idTipoCombustible']
    this.tipoVista = this.router.getCurrentNavigation()?.extras.state?.['tipoVista']
  }

  ngOnInit(): void {
    this.tipoCombustibleForm = this.tipoCombustibleService.getForm()
    this.estadoCombox = this.comboBoxService.estadoCombox

    if (this.idTipoCombustible != undefined) {
      this.tipoCombustibleService.getById(this.idTipoCombustible).subscribe((tipoCombustible: TipoCombustible) => {
        console.log(tipoCombustible);
        this.tipoCombustible = tipoCombustible
        this.tipoCombustibleForm.patchValue(tipoCombustible)
      })
    }

    console.log(this.tipoVista);

    this.validateTipoVista()

  }

  save() {
    this.tipoCombustibleService.add(this.tipoCombustibleForm.value).subscribe(() => {
      this.tipoCombustibleForm.reset();
      console.log('guardado');

    })
  }
  update() {

    let data = { ...this.tipoCombustible, ...this.tipoCombustibleForm.value }

    this.tipoCombustibleService.update(data).subscribe(() => {
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
