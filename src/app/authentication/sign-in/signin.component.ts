import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SigninService } from './services/signin.service';
import * as fromApp from '../../state/app.state';
import * as AuthActions from 'src/app/authentication/store/auth.actions'
import { LoginDTO } from '../../core/models/login-dto';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private store: Store<fromApp.State>,
    private signInService: SigninService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.signInService.getSignInFormBuilder()
  }

  login() {

    this.store.dispatch(AuthActions.LoginStart(this.loginForm.value))

  }

}
