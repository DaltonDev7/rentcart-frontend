import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/Cliente';
import { ClienteService } from 'src/app/core/services/cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  clientes!: Cliente[]

  constructor(private router: Router, private activedRouted: ActivatedRoute, private clienteService: ClienteService) { }


  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.clientes = data.clientes
      console.log(this.clientes);

    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/clientes/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idCliente?: number) {
    console.log(idCliente);

    this.router.navigate(['/renta/clientes/addOrEdit'], { relativeTo: this.activedRouted, state: { idCliente } })
  }

  remove(idcliente?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.clienteService.remove(idcliente).subscribe((data) => {

          this.clienteService.getAll().subscribe((cliente: any) => {
            this.clientes = cliente
          })
        })
      }
    })
  }

}
