import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoPersona } from 'src/app/core/models/TipoPersona';

@Component({
  selector: 'app-list-tipopersona',
  templateUrl: './list-tipopersona.component.html',
  styleUrls: ['./list-tipopersona.component.scss']
})
export class ListTipopersonaComponent implements OnInit {

  tipoPersona: TipoPersona[] = []
  constructor(private activedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRouted.data.subscribe((data: any) => {
      this.tipoPersona = data.tipoPersona
      console.log(this.tipoPersona);

    })
  }

  public remove(id: number | undefined) {

  }

  public update(id: number | undefined) {

  }

}
