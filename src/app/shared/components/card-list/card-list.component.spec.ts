import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects, reducers } from '@store/store';
import { effects as effectsN, reducers as reducersN } from '@modules/pages/templates/store/data.store';

import { SearchModule } from '@shared/pipe/search/search.module';
import { ImgBrokenModule } from '@shared/directives/img-broken/img-broken.module';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatDialog],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,

        RouterTestingModule,
        HttpClientModule,

        SearchModule,
        ImgBrokenModule,

        StoreModule.forRoot(reducers, {
          runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
        }),
        EffectsModule.forRoot(effects),

        StoreModule.forFeature('news', reducersN),
        EffectsModule.forFeature(effectsN)
      ],
      declarations: [CardListComponent]
    });
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
