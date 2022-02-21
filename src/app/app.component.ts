import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/state/app.state';
import * as authActions from 'src/app/authentication/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app-recetas-frontend';

  constructor(private router: Router, private store: Store<fromApp.State>) {


    this.store.dispatch(authActions.AutoLogin())



    console.log('mensaje desde ts app app  food');

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          //   this.store.dispatch(authActions.AutoLogin())
          //       this.store.dispatch(new fromMenuAction.setAbrirCerrarMenu(false))
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:

          //   this.spinner.hide();
          break;

        default:
          break;
      }

    })


  }


}
