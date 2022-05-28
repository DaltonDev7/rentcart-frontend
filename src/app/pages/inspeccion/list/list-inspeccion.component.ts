import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inspeccion } from 'src/app/core/models/Inspeccion';
import { InspeccionService } from 'src/app/core/services/inspeccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-inspeccion',
  templateUrl: './list-inspeccion.component.html',
  styleUrls: ['./list-inspeccion.component.scss']
})
export class ListInspeccionComponent implements OnInit {

  inspecciones: Inspeccion[] = []

  constructor(private activedRouted: ActivatedRoute, private route: Router, private inspeccionService: InspeccionService) { }


  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.inspecciones = data.inspecciones
    })
  }


  add(tipoVista: string) {
    this.route.navigate(['/renta/inspeccion/addOrUpdate'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idInspeccion?: number) {
    this.route.navigate(['/renta/inspeccion/addOrUpdate'], { relativeTo: this.activedRouted, state: { idInspeccion } })
  }

  remove(idInspeccion?: number) {

    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.inspeccionService.removeInspeccion(idInspeccion).subscribe((data) => {

          this.inspeccionService.get().subscribe((inspecciones: Inspeccion[]) => {
            this.inspecciones = inspecciones
          })
        })
      }
    })
  }

}
