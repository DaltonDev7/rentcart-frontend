import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from 'src/app/core/models/login-dto';
import { environment } from 'src/environments/environment';
import { tokenName } from 'src/app/core/constants/auth-token';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SigninService {

  constructor(
  
    private http: HttpClient,
    private router: Router
  ) { }


  public login(payload: LoginDTO) {
    return this.http.post<any>(`${environment.foodApp}/auth/Login`, payload)
  }

  public logout(): void {
    localStorage.removeItem(tokenName)
    this.router.navigate(['/login']);
  }



}
