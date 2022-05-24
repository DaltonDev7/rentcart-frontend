import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'src/app/core/models/Modelo';

@Component({
  selector: 'app-list-modelo',
  templateUrl: './list-modelo.component.html',
  styleUrls: ['./list-modelo.component.scss']
})
export class ListModeloComponent implements OnInit {

  modelos: Modelo[] = []

  constructor(private activedRouted: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.modelos = data.modelos
    })
  }

  add(tipoVista: string) {
    this.route.navigate(['/renta/modelo/addOrUpdate'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idModelo?: number) {
    this.route.navigate(['/renta/modelo/addOrUpdate'], { relativeTo: this.activedRouted, state: { idModelo } })
  }

}
