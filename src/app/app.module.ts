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
import { ReactiveFormsModule } from '@angular/forms';
import { reducer } from './state/app.state';
import { AuthEffects } from './authentication/store/auth.effects';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      name: 'AppFood DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
