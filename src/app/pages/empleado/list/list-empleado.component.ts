import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/core/models/Empleado';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { EmpleadoService } from 'src/app/core/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})
export class ListEmpleadoComponent implements OnInit {

  empleados!: Empleado[]

  constructor(private router: Router, private activedRouted: ActivatedRoute, private empleadoService : EmpleadoService) { }

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

  remove(idempleado?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.empleadoService.remove(idempleado).subscribe((data) => {

          this.empleadoService.getAll().subscribe((data: any) => {
            this.empleados = data
          })
        })
      }
    })
  }


}
