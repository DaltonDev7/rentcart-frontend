import { Injectable } from '@angular/core';
import { Rol } from 'src/app/core/models/rol.model';
import { Perfil } from '../enum/perfil.enums';

@Injectable({
  providedIn: 'root'
})
export class RedireccionarPerfilService {

  constructor() { }


  redirect(rol: Rol) {
    switch (rol.Id) {
      case Perfil.ADMINISTRADOR:
        return "/administrador"
        break;
      case Perfil.USUARIO:
        return "/"
        break;

      default:
        return "/"
        break;
    }
  }
}
