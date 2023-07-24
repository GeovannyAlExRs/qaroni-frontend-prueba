import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';


import { StoreModule } from '@ngrx/store';
import { effects, reducers } from '@store/store';
import { EffectsModule } from '@ngrx/effects';

import { HeaderModule } from '@shared/layouts/header/header.module';
import { SidebarModule } from '@shared/layouts/sidebar/sidebar.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,

      BrowserAnimationsModule,
      MatSidenavModule,

      HeaderModule,
      SidebarModule,

      StoreModule.forRoot(reducers, {
        runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
      }),
      EffectsModule.forRoot(effects),

    ],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
