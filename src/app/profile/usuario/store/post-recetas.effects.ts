import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from '../services/post.service';
import * as postRecetasActions from 'src/app/profile/usuario/store/post-recetas.actions';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { PostCreatedDTO } from "src/app/core/models/post-created-dto.model";
import { DataFormatService } from "src/app/core/services/data-format.service";
import { Store } from "@ngrx/store";
import * as postRecetasReducer from 'src/app/profile/usuario/store/post-recetas.reducer';
import { FormService } from "src/app/core/services/form.service";


@Injectable()
export class PostRecetasEffects {


    constructor(
        private formService: FormService,
        private action$: Actions,
        private router: Router,
        private postService: PostService,
        private storePostReceta: Store<postRecetasReducer.PostRecetasState>
    ) { }


    savePost$ = createEffect(
        () => this.action$.pipe(
            ofType(postRecetasActions.SavedPost),
            exhaustMap((payload) => {

                let mainForm = this.formService.getMainForm()

                return this.postService.savePost(payload).pipe(
                    map((data: PostCreatedDTO) => {
                        mainForm.reset()
                        return this.storePostReceta.dispatch(postRecetasActions.SetIdPost({ IdPost: data.IdPost }))
                    })
                )

            })
        ),
        { dispatch: false }
    )

    idPostSaved$ = createEffect(
        () => this.action$.pipe(
            ofType(postRecetasActions.SetIdPost),
            tap(() => {
                
                return this.storePostReceta.dispatch(postRecetasActions.SetPostRecetaSaved({ payload: true }))
            })
        ),
        { dispatch: false }
    )

}


