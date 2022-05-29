import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { TipoVehiculoService } from "../services/tipo-vehiculo.service";

@Injectable({
    providedIn: 'root'
})
export class TipoVehiculoResolver implements Resolve<any>{

    constructor(private tipoVehiculoService : TipoVehiculoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.tipoVehiculoService.getAll().pipe(take(1));
    }

}