import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { VehiculoService } from "../services/vehiculo.service";

@Injectable({
    providedIn: 'root'
})
export class VehiculoResolver implements Resolve<any>{

    constructor(private VehiculoService : VehiculoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.VehiculoService.getAll().pipe(take(1));
    }

}