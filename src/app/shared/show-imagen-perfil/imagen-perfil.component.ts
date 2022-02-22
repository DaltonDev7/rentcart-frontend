import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { getCurrentUser } from 'src/app/authentication/store';
import { Usuario } from 'src/app/core/models/usuario.model';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import * as fromApp from 'src/app/state/app.state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'imagen-perfil',
  templateUrl: './imagen-perfil.component.html',
  styleUrls: ['./imagen-perfil.component.scss']
})
export class ImagenPerfilComponent implements OnInit {

  usuario: Usuario
  imagenUsuario: string;
  imagenDefecto: boolean;

  constructor(
    private store: Store<fromApp.State>,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {


    this.store.select((getCurrentUser)).subscribe((usuario: Usuario) => {
      this.usuario = usuario


      if (usuario.ImagenDefecto) {

        this.imagenUsuario = `assets/images/profile-default/${usuario.ImagenPerfil}`
        this.imagenDefecto = usuario.ImagenDefecto
      } else {
        this.getImagenUsuario()
      }
    })


  }

  private getImagenUsuario() {
    this.usuarioService.getImagenUsuario(this.usuario.ImagenPerfil).subscribe({
      next: ((data:any) => {
        this.imagenUsuario = data.imagen
      }),
      error: ((error) => {
        console.log(error);
      })
    })
  }

}
