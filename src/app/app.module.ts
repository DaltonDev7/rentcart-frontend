import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ProfileSelectionComponent } from './profile-selection/profile-selection.component';
import { MenuModule } from './shared/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { reducer } from './state/app.state';
import { AuthEffects } from './authentication/store/auth.effects';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './core/config/jwt-congif';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileSelectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      timeOut: 7000,
      disableTimeOut: false,
      closeButton: true,
    }),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      name: 'AppFood DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
