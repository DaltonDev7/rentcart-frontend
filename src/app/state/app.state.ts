import { ActionReducerMap } from "@ngrx/store";
import * as authenticationReducer from "../authentication/store/auth.reducer";
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer'




export interface State {
    authentication: authenticationReducer.UserState,
    postRecetas : postRecetasReducer.PostRecetasState
}

export const reducer : ActionReducerMap<State> = {
    authentication : authenticationReducer.AuthenticationReducer,
    postRecetas :postRecetasReducer.PostRecetanReducer
}

