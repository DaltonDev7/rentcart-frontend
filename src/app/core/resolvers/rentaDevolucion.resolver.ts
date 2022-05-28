import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { InspeccionService } from "../services/inspeccion.service";
import { MarcaService } from "../services/marca.service";
import { RentaDevolucionService } from "../services/renta-devolucion.service";

@Injectable({
    providedIn: 'root'
})
export class RentaResolver implements Resolve<any>{

    constructor(private rentaDevolucionService: RentaDevolucionService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.rentaDevolucionService.getAll().pipe(take(1));
    }

}