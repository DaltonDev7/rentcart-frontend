import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { EmpleadoService } from "../services/empleado.service";

@Injectable({
    providedIn: 'root'
})
export class EmpleadoResolver implements Resolve<any>{

    constructor(private empleadoService: EmpleadoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.empleadoService.getAll().pipe(take(1));
    }

}