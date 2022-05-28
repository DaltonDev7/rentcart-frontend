import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentaDevolucion } from 'src/app/core/models/RentaDevolucion';
import { RentaDevolucionService } from 'src/app/core/services/renta-devolucion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-renta-devolucion',
  templateUrl: './renta-devolucion.component.html',
  styleUrls: ['./renta-devolucion.component.scss']
})
export class RentaDevolucionComponent implements OnInit {

  rentas!: RentaDevolucion[]

  constructor(private router: Router, private activedRouted: ActivatedRoute, private rentaService :RentaDevolucionService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.rentas = data.rentas
      console.log(this.rentas);

    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idRenta?: number) {
    this.router.navigate(['/renta/addOrEdit'], { relativeTo: this.activedRouted, state: { idRenta } })
  }

  remove(idRenta?: number) {

    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.rentaService.remove(idRenta).subscribe((data) => {

          this.rentaService.getAll().subscribe((rentas: RentaDevolucion[]) => {
            this.rentas = rentas
          })
        })
      }
    })
  }

}
