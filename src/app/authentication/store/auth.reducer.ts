import { Action, createReducer, on } from '@ngrx/store';
import { Rol } from 'src/app/core/models/rol.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import * as authAction from './auth.actions';

export interface UserState {
    UserActual: Usuario,
    loading: boolean,
    redirect: boolean
    activeRole: Rol
}


export const initialState: UserState = {
    UserActual: null,
    loading: false,
    redirect: false,
    activeRole: null
}


// export const authReducer = createReducer(
//     initialState,
//     on(authAction.LoginStart, (state) => {
//         return {
//             return { ...state, loading: true }
//         }
//     })
// );