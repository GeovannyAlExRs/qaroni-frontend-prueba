import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects, reducers } from '@store/store';
import { effects as effectsN, reducers as reducersN } from '@modules/pages/templates/store/data.store';

import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';
import { CardListModule } from '@shared/components/card-list/card-list.module';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,

        CardHeaderGenericModule,
        CardListModule,

        StoreModule.forRoot(reducers, {
          runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true }
        }),
        EffectsModule.forRoot(effects),

        StoreModule.forFeature('news', reducersN),
        EffectsModule.forFeature(effectsN)
      ],
      declarations: [NewsComponent]
    });
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
