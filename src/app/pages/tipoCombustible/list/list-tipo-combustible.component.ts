import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCombustible } from 'src/app/core/models/TipoCombustible';
import { TipoCombustibleService } from 'src/app/core/services/tipo-combustible.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tipo-combustible',
  templateUrl: './list-tipo-combustible.component.html',
  styleUrls: ['./list-tipo-combustible.component.scss']
})
export class ListTipoCombustibleComponent implements OnInit {

  tipoCombustible: TipoCombustible[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute, private tipoCombustibleService: TipoCombustibleService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {

      this.tipoCombustible = data.tipoCombustible
      console.log(this.tipoCombustible);

    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/tipoCombustible/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idTipoCombustible?: number) {
    this.router.navigate(['/tipoCombustible/addOrEdit'], { relativeTo: this.activedRouted, state: { idTipoCombustible } })
  }
  remove(idCombustible?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.tipoCombustibleService.remove(idCombustible).subscribe((data) => {

          this.tipoCombustibleService.getAll().subscribe((tipoCombustible: any) => {
            this.tipoCombustible = tipoCombustible
          })
        })
      }
    })
  }

}
