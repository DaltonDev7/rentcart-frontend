import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { TipoCombustible } from "../models/TipoCombustible";
import { TipoCombustibleService } from "../services/tipo-combustible.service";
import { TipoPersonaService } from "../services/tipo-persona.service";

@Injectable({
    providedIn: 'root'
})
export class TipoCombustibleResolver implements Resolve<any>{

    constructor(private tipoCombustible : TipoCombustibleService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.tipoCombustible.getAll().pipe(take(1));
    }

}