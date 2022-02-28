import { Component, OnInit } from '@angular/core';
import { MENU_OPCIONES } from 'src/app/core/constants/menu-opciones';
import { MenuOpciones } from 'src/app/core/models/menu-opciones.model';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state';
import * as authActions from 'src/app/authentication/store/auth.actions';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //ATRIBUTOS
  menuOpciones: MenuOpciones[] = MENU_OPCIONES
  constructor(
    private storeAuth: Store<fromApp.State>
  ) { }

  ngOnInit(): void {

  }
  logout() {
    this.storeAuth.dispatch(authActions.Logout())
  }

}
