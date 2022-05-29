import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { TipoPersonaService } from "../services/tipo-persona.service";


@Injectable({
    providedIn: 'root'
})
export class GetByIdTipoPersonaResolver implements Resolve<any>{

    constructor(private tipoPersonaService : TipoPersonaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log(route.params['id']);
        
        return this.tipoPersonaService.getById(route.params['id']).pipe(take(1));
    }

}