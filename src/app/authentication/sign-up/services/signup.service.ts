import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../../core/services/toast.service';
import { Usuario } from '../../../core/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupService {


  attachementHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  getSignUpFormBuilder() {
    return this.fb.group({
      Nombres: [null, [Validators.required, Validators.minLength(2)]],
      Apellidos: [null, [Validators.required, Validators.minLength(2)]],
      UserName: [null, [Validators.required, Validators.minLength(3)]],
      ImagenPerfil: [null],
      Email: [null, [Validators.required, Validators.email]],
      PassWord: [null, [Validators.required, Validators.minLength(6)]],
      ConfirmedPassWord: [null, [Validators.required, Validators.minLength(6)]],
      ImagenDefecto: [null],
      IdSexo: [null, Validators.required]
    })
  }

  registrarUsuario(payload: Usuario) {
    const formData = new FormData();


    let idSexo = payload.IdSexo.toString()
    let imagenDefecto = payload.ImagenDefecto.toString()
    formData.append('Nombres', payload.Nombres);
    formData.append('Apellidos', payload.Apellidos);
    formData.append('Email', payload.Email);
    formData.append('UserName', payload.UserName);
    formData.append('PassWord', payload.Password);
    formData.append('IdSexo', idSexo);
    formData.append('ImagenPerfil', payload.ImagenPerfil);
    formData.append('ImagenDefecto', imagenDefecto);


    return this.http.post<any>(`${environment.foodApp}/auth/Registrar`, formData, this.attachementHeaders)

  }

}



