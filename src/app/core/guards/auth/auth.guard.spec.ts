import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';
import { effects, reducers } from '@store/store';
import { EffectsModule } from '@ngrx/effects';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,

        StoreModule.forRoot(reducers, {
          runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
        }),
        EffectsModule.forRoot(effects),
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
