import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'src/app/core/models/Modelo';
import { ModeloService } from 'src/app/core/services/modelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-modelo',
  templateUrl: './list-modelo.component.html',
  styleUrls: ['./list-modelo.component.scss']
})
export class ListModeloComponent implements OnInit {

  modelos: Modelo[] = []

  constructor(private activedRouted: ActivatedRoute, private route: Router, private modeloService:  ModeloService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.modelos = data.modelos
    })
  }

  add(tipoVista: string) {
    this.route.navigate(['/modelo/addOrUpdate'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idModelo?: number) {
    this.route.navigate(['/modelo/addOrUpdate'], { relativeTo: this.activedRouted, state: { idModelo } })
  }
  remove(idmodelo?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.modeloService.remove(idmodelo).subscribe((data) => {

          this.modeloService.getAll().subscribe((modelos: any) => {
            this.modelos = modelos
          })
        })
      }
    })
  }

}
