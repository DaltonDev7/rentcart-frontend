import { createAction, props } from '@ngrx/store';
import { LoginDTO } from 'src/app/core/models/login-dto';
import { Rol } from 'src/app/core/models/rol.model';
import { Usuario } from '../../core/models/usuario.model';



export const LOGIN_START = '[Login] LOGIN_START';
export const LOGIN_SUCCESS = '[Login] LOGIN_SUCCESS';
export const LOGIN_ERROR = '[Login] LOGIN_ERROR';
export const SET_ROL = '[Login] SET_ROL';
export const AUTO_LOGIN = '[Login] AUTO_LOGIN';
export const LOGOUT = '[Login] LOGOUT';
export const AUTO_LOGIN_ERROR = '[Login] AUTO_LOGIN_ERROR';
export const UNSET_ACTIVE_ROLE = '[Login] UNSET_ACTIVE_ROLE';
export const UPDATE_USER = '[Login] UPDATE_USER';




export const LoginStart = createAction(
    LOGIN_START,
    (payload: LoginDTO) => payload
    // props<{ payload: LoginDTO }>()
);

export const LoginSuccess = createAction(
    LOGIN_SUCCESS,
    ((payload: Usuario, redirect: boolean, iniciarSesionFirstTime?: boolean) => {
        return { payload, redirect, iniciarSesionFirstTime }
    })
    // props<{ payload: Usuario, redirect: boolean }>()
);

export const LoginError = createAction(
    LOGIN_ERROR,
    (payload: any) => payload
);

export const SetRol = createAction(
    SET_ROL,
    props<{ payload: Rol }>()
);

export const AutoLogin = createAction(
    '[Login] AUTO_LOGIN',
);

export const Logout = createAction(
    LOGOUT,
);



export const AutoLoginError = createAction(
    '[Login] AUTO_LOGIN_ERROR',
    props<{ error: string }>()
)


