import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoVehiculo } from 'src/app/core/models/TipoVehiculo';

@Component({
  selector: 'app-list-tipovehiculo',
  templateUrl: './list-tipovehiculo.component.html',
  styleUrls: ['./list-tipovehiculo.component.scss']
})
export class ListTipovehiculoComponent implements OnInit {

  tiposVehiculos: TipoVehiculo[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

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

}
