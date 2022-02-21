import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../state/app.state'
import { getCurrentUser } from '../../authentication/store/index';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private store: Store<fromApp.State>, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.store.pipe(select(getCurrentUser)).pipe(map((user)=>{
      if(user){
        return true
      }else{
        return this.router.createUrlTree(['/login'])
      }
    }))




  }


  
}
