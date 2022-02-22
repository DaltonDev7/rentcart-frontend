import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class RegistroValidatorService {

  constructor() { }


  validatePassword(signUpForm: FormGroup): boolean {
    let password = signUpForm.get('PassWord').value;
    let passwordConfirmed = signUpForm.get('ConfirmedPassWord').value;

    let validate = password == passwordConfirmed ? true : false
    return validate
  }

  validateImgUsuario(imagenUsuario: any, signUpForm: FormGroup) {
    let imagenPerfil = signUpForm.get('ImagenPerfil')
    let sexoValue = signUpForm.get('IdSexo').value
    let imagenDefecto = signUpForm.get('ImagenDefecto')

    if (imagenUsuario)
      imagenPerfil.patchValue(imagenUsuario)
    else
      switch (sexoValue) {
        case 1:
          imagenPerfil.patchValue('boy.jpg')
          imagenDefecto.patchValue(true)
          break;
        case 2:
          imagenPerfil.patchValue('girl.jpg')
          imagenDefecto.patchValue(true)
          break;
      }


  }

}
