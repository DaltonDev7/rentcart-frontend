import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { InspeccionService } from "../services/inspeccion.service";
import { MarcaService } from "../services/marca.service";

@Injectable({
    providedIn: 'root'
})
export class InspeccionResolver implements Resolve<any>{

    constructor(private inspeccionService: InspeccionService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.inspeccionService.get().pipe(take(1));
    }

}