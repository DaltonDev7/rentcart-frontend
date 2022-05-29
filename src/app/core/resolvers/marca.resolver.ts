import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { MarcaService } from "../services/marca.service";

@Injectable({
    providedIn: 'root'
})
export class MarcaResolver implements Resolve<any>{

    constructor(private marcaService: MarcaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.marcaService.get().pipe(take(1));
    }

}