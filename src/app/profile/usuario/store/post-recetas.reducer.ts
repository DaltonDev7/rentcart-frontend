import { createReducer, on } from "@ngrx/store"
import * as postRecetasActions from './post-recetas.actions'



export interface PostRecetasState {
    postRecetaCamposRequerido: boolean
    postRecetaSaved: boolean,
    IdPost:number
}

export const initialState: PostRecetasState = {
    postRecetaCamposRequerido: false,
    postRecetaSaved: false,
    IdPost:0
}


export const PostRecetanReducer = createReducer(
    initialState,

    on(postRecetasActions.SetPostRecetaSaved, (state, action) => {
        return {
            ...state,
            postRecetaSaved: action.payload
        }
    }),

    on(postRecetasActions.SetIdPost, (state, action) => {
        return {
            ...state,
            IdPost: action.IdPost
        }
    }),

    on(postRecetasActions.SetPostRecetaCamposRequeridos, (state, action) => {
        console.log(action);
        console.log(state);
        return {
            ...state,
            postRecetaCamposRequerido: !state.postRecetaCamposRequerido
        }
    }),
)

