import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoVehiculo } from 'src/app/core/models/TipoVehiculo';
import { TipoVehiculoService } from 'src/app/core/services/tipo-vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tipovehiculo',
  templateUrl: './list-tipovehiculo.component.html',
  styleUrls: ['./list-tipovehiculo.component.scss']
})
export class ListTipovehiculoComponent implements OnInit {

  tiposVehiculos: TipoVehiculo[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute, private tipoVehiculo :TipoVehiculoService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data:any) => {

      this.tiposVehiculos = data.tipoVehiculos
      console.log(this.tiposVehiculos);
      
   })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/tipoVehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idTipoVehiculo?: number) {
    this.router.navigate(['/renta/tipoVehiculos/addOrEdit'], { relativeTo: this.activedRouted, state: {  idTipoVehiculo } })
  }
  remove(idTipo?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.tipoVehiculo.remove(idTipo).subscribe((data) => {

          this.tipoVehiculo.getAll().subscribe((data: any) => {
            console.log(data);
            
            this.tipoVehiculo = data
          })
        })
      }
    })
  }

}
