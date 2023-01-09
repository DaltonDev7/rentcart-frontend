import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/core/models/Vehiculo';
import { VehiculoService } from 'src/app/core/services/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.scss']
})
export class ListVehiculoComponent implements OnInit {

  vehiculos: Vehiculo[] = []

  constructor(private activedRouted: ActivatedRoute, private route: Router, private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      console.log(data);
      this.vehiculos = data.vehiculos
    })
  }

  add(tipoVista: string) {
    this.route.navigate(['/vehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idVehiculo?: number) {
    this.route.navigate(['/vehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: { idVehiculo } })
  }
  remove(idvehiculo?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.vehiculoService.remove(idvehiculo).subscribe((data) => {

          this.vehiculoService.getAll().subscribe((vehiculos: any) => {
            this.vehiculos = vehiculos
          })
        })
      }
    })
  }
}
