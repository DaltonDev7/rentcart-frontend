import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/models/Vehiculo';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.scss']
})
export class ListVehiculoComponent implements OnInit {

  vehiculos: Vehiculo[] = []

  constructor(private activedRouted: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.vehiculos = data.vehiculos
    })
  }

  add(tipoVista: string) {
    this.route.navigate(['/renta/vehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idVehiculo?: number) {
    this.route.navigate(['/renta/vehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: { idVehiculo } })
  }

}
