import { Component, OnInit } from '@angular/core';
import { ComboxboxService } from '../../core/services/comboxbox.service';
import { Combox } from '../../core/interfaces/combox';
import { FormGroup } from '@angular/forms';
import { SignupService } from './services/signup.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { RegistroValidatorService } from './services/registro-validator.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {

  //atributos
  signUpForm: FormGroup
  imgUser: any;
  sexoCombox: Combox[] = []
  showImagenUpload: boolean = false
  showSubirFotoSection: boolean = false


  constructor(
    private registroValidator: RegistroValidatorService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private comboxService: ComboxboxService,
    private signUpService: SignupService,
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.signUpService.getSignUpFormBuilder()
    this.sexoCombox = this.comboxService.sexoCombox
    this.primengConfig.ripple = true;



    this.validateSexoValue()
  }

  checkValueSwitch(): void {
    this.showImagenUpload = !this.showImagenUpload
    if (!this.showImagenUpload) this.imgUser = null
  }

  capturarImagenUsuario(valor: any) {
    this.imgUser = valor
    this.signUpForm.get('ImagenDefecto').patchValue(false)
  }


  private validateSexoValue() {
    this.signUpForm.get('IdSexo').valueChanges.subscribe((valor) => {
      if (valor) this.showSubirFotoSection = true
    })
  }


  registrarUsuario() {
    let validatePassword = this.registroValidator.validatePassword(this.signUpForm)

    if (!validatePassword) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden' });
    } else {
      this.registroValidator.validateImgUsuario(this.imgUser, this.signUpForm)
      this.signUpService.registrarUsuario(this.signUpForm.value).subscribe({
        next: ((data) => {
          this.messageService.add({ sticky: true, key: "Key1", severity: 'success', summary: 'Success', detail: 'Usuario registrado correctamente. Revise su correo electronico  para activar su cuenta.' });
          this.signUpForm.reset()
        }),
        error: ((error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.error.message });
        }),
        complete: (() => {
          //
        })
      })

    }
  }


  //15 de marzo 8am
}
