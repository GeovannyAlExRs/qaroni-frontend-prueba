import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderGenericComponent } from './card-header-generic.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('CardHeaderGenericComponent', () => {
  let component: CardHeaderGenericComponent;
  let fixture: ComponentFixture<CardHeaderGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
      ],
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
