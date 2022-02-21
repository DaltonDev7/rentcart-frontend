import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../config/jwt-congif';

@Injectable({
  providedIn: 'root'
})
export class TokenExpiredService {

  constructor(
    private jwtHelper: JwtHelperService
  ) { }

  public getTokenExpired(): boolean {
    let token = tokenGetter()
    let tokenExpired = this.jwtHelper.isTokenExpired(token);
    return tokenExpired
  }


}
