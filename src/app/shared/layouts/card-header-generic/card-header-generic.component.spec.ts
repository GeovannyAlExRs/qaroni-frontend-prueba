import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderGenericComponent } from './card-header-generic.component';

describe('CardHeaderGenericComponent', () => {
  let component: CardHeaderGenericComponent;
  let fixture: ComponentFixture<CardHeaderGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardHeaderGenericComponent]
    });
    fixture = TestBed.createComponent(CardHeaderGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
