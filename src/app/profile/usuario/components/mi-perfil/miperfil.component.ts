import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { Usuario } from '../../../../core/models/usuario.model';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state';
import { getImgUsuarioRuta } from 'src/app/authentication/store';
import { getCurrentUser } from '../../../../authentication/store/index';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss']
})
export class MiperfilComponent implements OnInit {

  usuario: Usuario

  constructor(
    private store: Store<fromApp.State>,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.store.select((getCurrentUser)).subscribe((usuario: Usuario) => {
      this.usuario = usuario
    })


  }

}
