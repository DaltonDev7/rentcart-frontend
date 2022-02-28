import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostRecetasState } from "./post-recetas.reducer";


const getPostRecetasStatus = createFeatureSelector<PostRecetasState>('postRecetas');

export const getPostSaved = createSelector(
    getPostRecetasStatus,
    state => state.postRecetaSaved
);

export const getIdPostReceta = createSelector(
    getPostRecetasStatus,
    state => state.IdPost
);

export const getPostRecetasCamposRequerido = createSelector(
    getPostRecetasStatus,
    state => state.postRecetaCamposRequerido
);

