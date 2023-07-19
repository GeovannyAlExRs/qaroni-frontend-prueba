import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderModule } from '@shared/layouts/header/header.module';
import { SidebarModule } from '@shared/layouts/sidebar/sidebar.module';

import { environment } from '@env/environment';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { effects, reducers } from '@store/store';
import { AuthInterceptor } from '@core/interceptors/auth/auth.interceptor';

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatSidenavModule,

    HeaderModule,
    SidebarModule,

    HttpClientModule,

    StoreDevTools,
    StoreModule.forRoot(reducers, {
      runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
    }),
    EffectsModule.forRoot(effects),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
