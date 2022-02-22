import { Component, OnInit } from '@angular/core';
import { MENU_OPCIONES } from 'src/app/core/constants/menu-opciones';
import { MenuOpciones } from 'src/app/core/models/menu-opciones.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //ATRIBUTOS
  menuOpciones: MenuOpciones[] = MENU_OPCIONES
  constructor() { }

  ngOnInit(): void {

  }

}
