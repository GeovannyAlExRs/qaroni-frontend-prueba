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


import { effectsGroup } from '@modules/pages/templates/store/data.store';
import { reducerGroup } from '@modules/pages/templates/store/data.store';
import { FormsModule } from '@angular/forms';

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
    FormsModule,

    HttpClientModule,

    StoreDevTools,
    StoreModule.forRoot(reducers, {
      runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
    }),
    EffectsModule.forRoot(effects),

    StoreModule.forFeature('groups', reducerGroup),
    EffectsModule.forFeature(effectsGroup),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
