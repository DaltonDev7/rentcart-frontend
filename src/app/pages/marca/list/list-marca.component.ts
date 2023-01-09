import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/core/models/Marca';
import { MarcaService } from 'src/app/core/services/marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-marca',
  templateUrl: './list-marca.component.html',
  styleUrls: ['./list-marca.component.scss']
})
export class ListMarcaComponent implements OnInit {

  marcas: Marca[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute, private marcaService : MarcaService) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data:any) => {

       this.marcas = data.marcas
       console.log(this.marcas);
       
    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/marca/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idMarca?: number) {
    this.router.navigate(['/marca/addOrEdit'], { relativeTo: this.activedRouted, state: {  idMarca } })
  }

  remove(idmodelo?: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.marcaService.remove(idmodelo).subscribe((data) => {

          this.marcaService.get().subscribe((marcas: any) => {
            this.marcas = marcas
          })
        })
      }
    })
  }

}
