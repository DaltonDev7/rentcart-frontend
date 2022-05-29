import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { take } from "rxjs";
import { ClienteService } from "../services/cliente.service";


@Injectable({
    providedIn: 'root'
})
export class ClienteResolver implements Resolve<any>{

    constructor(private clienteService: ClienteService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.clienteService.getAll().pipe(take(1));
    }

}