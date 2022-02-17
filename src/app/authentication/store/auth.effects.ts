import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {


    constructor(
        private action$: Actions,
        private router: Router,
        //private jwtHelper: JwtHelperService,
    ){}


}