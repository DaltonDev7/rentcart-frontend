import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromApp from '../../state/app.state'
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';
import * as authActions from 'src/app/authentication/store/auth.actions';



@Injectable({ providedIn: 'root' })
export class ProfileSelectionGuard implements CanActivate {

  constructor(private Store: Store<fromApp.State>,
    private router: Router,
    private userService: UsuarioService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.geDatatUsuario()
      .pipe(
        take(1),
        map((usuario: Usuario) => {

          let rol = usuario.Roles.find((rol) => rol.Id == route.data['role']);

          if (rol) {
            this.Store.dispatch(authActions.SetRol({ payload: rol }));
            return true;
          } else {
            //  this.notification.error("Su usuario no está permitido para utilizar este perfil. Por favor contacte con soporte técnico.");
            return this.router.createUrlTree(['/login']);
          }
        })
      );
  }

}