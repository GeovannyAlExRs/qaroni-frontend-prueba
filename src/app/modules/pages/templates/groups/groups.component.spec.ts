import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsComponent } from './groups.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects, reducers } from '@store/store';
import { effectsGroup, reducerGroup } from '@modules/pages/templates/store/data.store';

import { CardHeaderGenericModule } from '@shared/layouts/card-header-generic/card-header-generic.module';
import { CardListModule } from '@shared/components/card-list/card-list.module';

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

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

        StoreModule.forFeature('news', reducerGroup),
        EffectsModule.forFeature(effectsGroup)
      ],
      declarations: [GroupsComponent]
    });
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
