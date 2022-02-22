import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './auth.reducer';

const getUserFeatureStatus = createFeatureSelector<UserState>('authentication');


export const getCurrentUser = createSelector(
    getUserFeatureStatus,
    state => state.UserActual
);

export const getImgUsuarioRuta = createSelector(
    getUserFeatureStatus,
    state => state.UserActual.ImagenPerfil
);

export const getNameUser = createSelector(
    getUserFeatureStatus,
    state => state.UserActual.Nombres
)

export const getIdCurrentUser = createSelector(
    getUserFeatureStatus,
    state => state.UserActual.Id
)

export const getLoadingLogin = createSelector(
    getUserFeatureStatus,
    state => state.loading
)