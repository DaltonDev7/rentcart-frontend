import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { TipoPersonaService } from "../services/tipo-persona.service";

@Injectable({
    providedIn: 'root'
})
export class TipoPersonaResolver implements Resolve<any>{

    constructor(private tipoPersonaService : TipoPersonaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.tipoPersonaService.getTipoPersonas().pipe(take(1));
    }

}