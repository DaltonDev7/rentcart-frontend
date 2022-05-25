import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCombustible } from 'src/app/core/models/TipoCombustible';

@Component({
  selector: 'app-list-tipo-combustible',
  templateUrl: './list-tipo-combustible.component.html',
  styleUrls: ['./list-tipo-combustible.component.scss']
})
export class ListTipoCombustibleComponent implements OnInit {

  tipoCombustible: TipoCombustible[] = []

  constructor(private router: Router, private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {

      this.tipoCombustible = data.tipoCombustible
      console.log(this.tipoCombustible);

    })
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/tipoCombustible/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idTipoCombustible?: number) {
    this.router.navigate(['/renta/tipoCombustible/addOrEdit'], { relativeTo: this.activedRouted, state: { idTipoCombustible } })
  }

}
