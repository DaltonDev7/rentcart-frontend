import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SigninService } from './services/signin.service';
import * as fromApp from '../../state/app.state';
import * as AuthActions from 'src/app/authentication/store/auth.actions'



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private store: Store<fromApp.State>,
    private signInService: SigninService,
    public fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    //creando form
    this.loginForm = this.fb.group({
      Email: [null, [Validators.email]],
      PassWord: [null]
    })


  }

  login() {

    this.store.dispatch(AuthActions.LoginStart(this.loginForm.value))

  }

}
