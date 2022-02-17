import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/core/models/login-dto';
import { environment } from 'src/environments/environment';

@Injectable()
export class SigninService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  getSignInFormBuilder() {
    return this.fb.group({
      Email: [null, [Validators.email]],
      PassWord: [null]
    })
  }

  login(payload: LoginDTO) {
    return this.http.post<any>(`${environment.foodApp}/auth/Login`, payload)
  }



}
