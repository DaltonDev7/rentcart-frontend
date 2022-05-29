import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { ModeloService } from "../services/modelo.service";


@Injectable({
    providedIn: 'root'
})
export class ModeloResolver implements Resolve<any>{

    constructor(private modeloService: ModeloService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.modeloService.getAll().pipe(take(1));
    }

}