import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store, Action } from '@ngrx/store';
import { catchError, exhaustMap, map, mergeMap, switchMap, tap } from "rxjs/operators";

import * as authActions from 'src/app/authentication/store/auth.actions';
import * as fromApp from 'src/app/state/app.state';
import { tokenName } from "src/app/core/constants/auth-token";
import { SigninService } from '../sign-in/services/signin.service';
import { of } from "rxjs";
import { UsuarioService } from "src/app/core/services/usuario.service";
import { RedireccionarPerfilService } from "src/app/core/services/redireccionar-perfil.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenExpiredService } from '../../core/services/token-expired.service';


@Injectable()
export class AuthEffects {


    constructor(
        private action$: Actions,
        private router: Router,
        private SigninService: SigninService,
        private storeAuth: Store<fromApp.State>,
        private usuarioService: UsuarioService,
        private rediretService: RedireccionarPerfilService,
        private jwtHelper: JwtHelperService,
    ) { }


    loginStart$ = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LoginStart),
            exhaustMap((payload) => {

                let data = {
                    Email: payload.Email,
                    PassWord: payload.PassWord
                }

                return this.SigninService.login(data).pipe(
                    map((data) => {


                        //removemos el token existente y ponemos el nuevo
                        localStorage.removeItem(tokenName);
                        localStorage.setItem(tokenName, data.token)
                        return this.usuarioService.geDatatUsuario().subscribe((data) => {

                            return this.storeAuth.dispatch(authActions.LoginSuccess(data, true, true))
                        })
                    }),
                    catchError((error) => {
                        return of(this.storeAuth.dispatch(authActions.LoginError(error)))
                    })
                )
            }
            )
        ),
        { dispatch: false }

    );


    loginSuccess = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LoginSuccess),
            tap((data) => {

                if (data.redirect) {

                    //Verificamos si el usuario tiene mas de un rol asignado
                    if (data.payload.Roles.length > 1) {
                        if (data.iniciarSesionFirstTime) {
                            this.router.navigate(['/seleccion-perfil']);
                        }
                    }
                    else {
                        if (data.iniciarSesionFirstTime) {
                            this.router.navigate([this.rediretService.redirect(data.payload.Roles[0])]);
                        }
                    }
                }
                else {

                    localStorage.removeItem(tokenName);
                    this.router.navigate(['/login']);
                }

            })
        ),
        { dispatch: false }
    );


    logout = createEffect(
        () => this.action$.pipe(
            ofType(authActions.Logout),
            tap(() => {
                this.SigninService.logout()
            })
        ),
        { dispatch: false }
    )


    LoginError = createEffect(
        () => this.action$.pipe(
            ofType(authActions.LoginError),
            tap((data) => {
                console.log(data);

                if (data.payload) {
                    //    this.toastr.error(data.payload.error.result)
                } else {
                    //     this.toastr.error("Ha ocurrido un error. Intente nuevamente o contacte con soporte tecnico.")
                }

            })
        ),
        { dispatch: false }
    )


    autoLogin$ = createEffect(
        () => this.action$.pipe(
            ofType(authActions.AutoLogin),
            exhaustMap((): any => {
                let token = localStorage.getItem(tokenName);
                let tokenExpired = this.jwtHelper.isTokenExpired(token);

                console.log('entro  aqui  auto login');

                if (!token) {

                    this.router.navigate(['/login']);
                    return of(authActions.AutoLoginError({ error: "No existe ningún usuario autenticado" }));
                }

                //si el token no ha expirado
                if (!tokenExpired) {
                    return this.usuarioService.geDatatUsuario().pipe(
                        map((user) => {

                            return this.storeAuth.dispatch(authActions.LoginSuccess(user, true))
                        }),
                        catchError((error) => {

                            this.router.navigate(['/login']);
                            localStorage.removeItem(tokenName);
                            return of(authActions.AutoLoginError({ error: "No se pudo obtener información del usuario" }));
                        }))

                } else {
                    return of(authActions.AutoLoginError({ error: "La sesión ha expirado, por favor inicie sesión" }));
                }
            })
        ),
        { dispatch: false }
    )





}