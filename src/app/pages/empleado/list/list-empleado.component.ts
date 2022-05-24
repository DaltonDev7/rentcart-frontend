import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/Empleado';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})
export class ListEmpleadoComponent implements OnInit {

  empleados!: Empleado[]

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.empleados = data.empleados
      console.log(this.empleados);
      
    })

  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/empleados/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idEmpleado?: number) {
    this.router.navigate(['/renta/empleados/addOrEdit'], { relativeTo: this.activedRouted, state: {  idEmpleado } })
  }


}
