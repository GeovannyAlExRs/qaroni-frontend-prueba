import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilmsComponent } from './form-films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('FormFilmsComponent', () => {
  let component: FormFilmsComponent;
  let fixture: ComponentFixture<FormFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,

        MatFormFieldModule,
        MatInputModule,
        FormsModule,
      ],
      declarations: [FormFilmsComponent]
    });
    fixture = TestBed.createComponent(FormFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
