import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/core/models/Cliente';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  clientes!: Cliente[]

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }


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
    
    this.router.navigate(['/renta/clientes/addOrEdit'], { relativeTo: this.activedRouted, state: {  idCliente } })
  }

}
