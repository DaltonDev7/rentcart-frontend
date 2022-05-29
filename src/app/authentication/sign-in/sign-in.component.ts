import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Usuario: [null, Validators.minLength(5)],
      PassWord: [null, [Validators.required, Validators.minLength(5)]]
    })

  }

  login() {

    let usuario = this.loginForm.get('Usuario')?.value
    let password = this.loginForm.get('PassWord')?.value

    if (usuario == 'administrador' && password == 'pass123456') {
      this.router.navigate(['/renta'])
    } else {
      this.toast.error("Credenciales incorrectas. Intente de nuevo")
    }

  }

}
