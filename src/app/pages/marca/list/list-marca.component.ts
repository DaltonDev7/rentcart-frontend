import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/core/models/Marca';

@Component({
  selector: 'app-list-marca',
  templateUrl: './list-marca.component.html',
  styleUrls: ['./list-marca.component.scss']
})
export class ListMarcaComponent implements OnInit {

  marcas: Marca[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data:any) => {

       this.marcas = data.marcas
       console.log(this.marcas);
       
    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/marca/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idMarca?: number) {
    console.log(idMarca);
    
    this.router.navigate(['/renta/marca/addOrEdit'], { relativeTo: this.activedRouted, state: {  idMarca } })
  }

}
