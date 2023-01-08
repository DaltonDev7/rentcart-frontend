import { Component, OnInit } from '@angular/core';
import { MENU_OPCIONES } from 'src/app/core/constants/menu-opciones';
import { MenuOpciones } from 'src/app/core/models/menu-opciones';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuOpciones: MenuOpciones[] = []

  constructor() { }

  ngOnInit(): void {
    this.menuOpciones = MENU_OPCIONES
  }

}
