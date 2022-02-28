import { createAction, props } from "@ngrx/store";
import { PostRecetaSave } from "src/app/core/models/post-receta-save.model";



export const SetPostRecetaSaved = createAction(
    '[Post-receta] Saved',
    props<{ payload: boolean }>()
);

export const SetPostRecetaCamposRequeridos = createAction(
    '[Post-receta] Campos Requeridos',
    props<{ payload: boolean }>()
);

export const SavedPost = createAction(
    '[Post-receta] Save Post',
    (payload: PostRecetaSave) => payload
);

export const SetIdPost = createAction(
    '[Post-receta] Set IdPost',
    (IdPost: any) => IdPost
);

