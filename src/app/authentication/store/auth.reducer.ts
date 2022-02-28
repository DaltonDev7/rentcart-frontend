import { Action, createReducer, on } from '@ngrx/store';
import { Rol } from 'src/app/core/models/rol.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import * as authAction from './auth.actions';
import * as authActions from 'src/app/authentication/store/auth.actions';

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


export const AuthenticationReducer = createReducer(
    initialState,

    on(authAction.LoginStart, (state, action) => {

        return {
            ...state,
            loading: true
        }
    }),

    on(authAction.LoginSuccess, (state, action) => {

        return {
            ...state,
            UserActual: action.payload,
            loading: false,
            redirect: action.redirect
        }
    }),

    on(authAction.LoginError, (state, action) => {
        return {
            ...state,
            loading: false,
            activeRole: null
        }
    }),

    on(authAction.SetRol, (state, action) => {
        return {
            ...state,
            activeRole: action.payload
        }
    }),

    on(authAction.AutoLogin, (state, action) => {

        return {
            ...state,
            loading: false,
            activeRole: null
        }
    }),

    on(authAction.Logout, (state, action) => {
        return {
            ...state,
            UserActual: null,
            loading: false,
            activeRole: null
        }
    })





);