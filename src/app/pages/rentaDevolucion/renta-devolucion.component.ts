import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentaDevolucion } from 'src/app/core/models/RentaDevolucion';

@Component({
  selector: 'app-renta-devolucion',
  templateUrl: './renta-devolucion.component.html',
  styleUrls: ['./renta-devolucion.component.scss']
})
export class RentaDevolucionComponent implements OnInit {

  rentas!: RentaDevolucion[]

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

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

}
