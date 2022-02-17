import { createAction, props } from '@ngrx/store';
import { LoginDTO } from 'src/app/core/models/login-dto';
import { Rol } from 'src/app/core/models/rol.model';
import { Usuario } from '../../core/models/usuario.model';

export const LoginStart = createAction(
    '[Login] LOGIN_START',
    props<{ payload: LoginDTO }>()
);

export const LoginSuccess = createAction(
    '[Login] LOGIN_SUCCESS',
    props<{ payload: Usuario, redirect: boolean }>()
);

export const LoginError = createAction(
    '[Login] LOGIN_ERROR',
    props<{ payload: any }>()
);

export const SetRol = createAction(
    '[Login] SET_ROL',
    props<{ payload: Rol }>()
);

export const AutoLogin = createAction(
    '[Login] AUTO_LOGIN',
);


